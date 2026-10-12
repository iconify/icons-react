import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-khqclun.css';
import '../../css/l/lt58dk2xy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-khqclun"/><path class="lt58dk2xy"/>`,
		"fallback": "energy-icons:control-panel-20",
	});
}

export default Component;
