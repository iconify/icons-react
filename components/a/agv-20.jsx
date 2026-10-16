import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qia2ord5v.css';
import '../../css/r/reifvraao.css';
import '../../css/j/jbfxwxb0g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qia2ord5v"/><path class="reifvraao"/><path class="jbfxwxb0g"/>`,
		"fallback": "energy-icons:agv-20",
	});
}

export default Component;
