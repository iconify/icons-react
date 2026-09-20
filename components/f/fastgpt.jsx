import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0dfc_bsh.css';
import '../../css/d/d1sa1b83z.css';
import '../../css/e/ex7wzmbgw.css';
import '../../css/m/m0sw6cb6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGrdgELbTg" x1="12645.625" x2="12645.625" y1="-5202.375" y2="-26770.375" gradientTransform="matrix(.02374 0 0 -.02374 -44.193 -123.499)" gradientUnits="userSpaceOnUse"><stop offset="0" class="i0dfc_bsh"/><stop offset="1" class="d1sa1b83z"/></linearGradient><path fill="url(#SVGrdgELbTg)" class="ex7wzmbgw"/><linearGradient id="SVG2EJZBcUh" x1="16134.377" x2="16134.377" y1="-14422.284" y2="-19678.711" gradientTransform="matrix(.02374 0 0 -.02374 -44.193 -123.499)" gradientUnits="userSpaceOnUse"><stop offset="0" class="i0dfc_bsh"/><stop offset="1" class="d1sa1b83z"/></linearGradient><path fill="url(#SVG2EJZBcUh)" class="m0sw6cb6c"/>`,
		"fallback": "selfhst:fastgpt",
	});
}

export default Component;
