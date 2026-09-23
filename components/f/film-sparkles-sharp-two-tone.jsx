import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vzyo6xb_u.css';
import '../../css/s/snibgdcaa.css';
import '../../css/n/nyf2tdbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vzyo6xb_u"/><path class="snibgdcaa"/><path class="nyf2tdbha"/></g>`,
		"fallback": "keyline-icons:film-sparkles-sharp-two-tone",
	});
}

export default Component;
