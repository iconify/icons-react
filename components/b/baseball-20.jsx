import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/j/jqar-cb1e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="jqar-cb1e"/>`,
		"fallback": "energy-icons:baseball-20",
	});
}

export default Component;
