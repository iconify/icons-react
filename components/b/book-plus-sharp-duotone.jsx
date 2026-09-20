import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q68xhu0of.css';
import '../../css/v/v3wmtwbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q68xhu0of"/><path class="v3wmtwbrn"/></g>`,
		"fallback": "keyline-icons:book-plus-sharp-duotone",
	});
}

export default Component;
