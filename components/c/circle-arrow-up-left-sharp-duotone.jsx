import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e9ewmybae.css';
import '../../css/j/jzuiu5b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e9ewmybae"/><path class="jzuiu5b3r"/></g>`,
		"fallback": "keyline-icons:circle-arrow-up-left-sharp-duotone",
	});
}

export default Component;
