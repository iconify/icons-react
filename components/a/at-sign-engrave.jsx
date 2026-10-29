import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v9vofmbba.css';
import '../../css/a/azw_bfr_g.css';
import '../../css/b/bk04fhbuy.css';
import '../../css/a/a7xk9qw1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v9vofmbba"/><path class="azw_bfr_g wm-shadow"/><path class="bk04fhbuy"/><path class="a7xk9qw1p"/></g>`,
		"fallback": "withicons:at-sign-engrave",
	});
}

export default Component;
