import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zr2pi136c.css';
import '../../css/a/aezy8qb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zr2pi136c"/><path class="aezy8qb_v"/></g>`,
		"fallback": "streamline-logos:google-hangouts-meet-logo",
	});
}

export default Component;
