import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx_bkof7e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx_bkof7e"/>`,
		"fallback": "devicon-plain:hermes",
	});
}

export default Component;
