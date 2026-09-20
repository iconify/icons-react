import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r07kyrbmj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r07kyrbmj"/>`,
		"fallback": "pinhead:circular-pill-and-capsule-pill-above-outstretched-hand",
	});
}

export default Component;
