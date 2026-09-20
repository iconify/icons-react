import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6fn0fb1j.css';
import '../../css/h/h-h-argoo.css';
import '../../css/t/t4pfqyh0j.css';
import '../../css/p/pwzfsvbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l6fn0fb1j"/><path class="h-h-argoo"/><path class="t4pfqyh0j"/><path class="pwzfsvbhy"/></g>`,
		"fallback": "solar:clapperboard-open-line-duotone",
	});
}

export default Component;
