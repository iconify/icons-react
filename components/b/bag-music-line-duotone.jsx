import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u50gi_bex.css';
import '../../css/m/mw42pob4d.css';
import '../../css/p/pqorf1bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u50gi_bex"/><path class="mw42pob4d"/><path class="pqorf1bzi"/></g>`,
		"fallback": "solar:bag-music-line-duotone",
	});
}

export default Component;
