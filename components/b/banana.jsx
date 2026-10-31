import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/ruqx7b4nr.css';
import '../../css/o/otzm1ktdf.css';
import '../../css/w/wm8phubkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdnTaKbAQ" x1="8.01" x2="14.01" y1="3.17" y2="20.18" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdnTaKbAQ)" class="ruqx7b4nr"/><path class="otzm1ktdf wm-a"/><path class="wm-shine wm8phubkl"/></g>`,
		"fallback": "withicons-utsav:banana",
	});
}

export default Component;
