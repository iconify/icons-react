import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3b3aw3dq.css';
import '../../css/w/wzf1vhbnp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3b3aw3dq"/><path class="wzf1vhbnp"/>`,
		"fallback": "energy-icons:environmental-impact-48",
	});
}

export default Component;
