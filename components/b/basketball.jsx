import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/uwl3sjb5y.css';
import '../../css/h/hrgdb9bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGu54dmg8Z" x1="9" x2="15" y1="1.57" y2="22.45" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGu54dmg8Z)" class="uwl3sjb5y"/><path class="hrgdb9bic wm-shine"/></g>`,
		"fallback": "withicons-utsav:basketball",
	});
}

export default Component;
