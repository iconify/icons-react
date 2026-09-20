import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-8x0x0fo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-8x0x0fo"/>`,
		"fallback": "pinhead:circular-pill-and-capsule-pill",
	});
}

export default Component;
