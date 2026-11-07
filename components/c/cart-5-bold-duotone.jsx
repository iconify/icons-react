import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk-xizbpd.css';
import '../../css/s/soid8318v.css';
import '../../css/f/fmowag7ap.css';
import '../../css/h/h7j21sb2c.css';
import '../../css/c/c2otsz3_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk-xizbpd"/><path class="soid8318v"/><path class="fmowag7ap"/><path class="h7j21sb2c"/><path class="c2otsz3_e"/>`,
		"fallback": "solar:cart-5-bold-duotone",
	});
}

export default Component;
