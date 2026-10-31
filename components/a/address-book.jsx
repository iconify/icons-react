import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/boszwjbxa.css';
import '../../css/n/nhc1pccmv.css';
import '../../css/z/z4s2yxb2y.css';
import '../../css/s/sri1cjhdk.css';
import '../../css/u/umy0o1b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="boszwjbxa wm-shadow"/><path class="nhc1pccmv"/><path class="z4s2yxb2y"/><path class="sri1cjhdk"/><path class="umy0o1b0k"/></g>`,
		"fallback": "withicons-retro:address-book",
	});
}

export default Component;
