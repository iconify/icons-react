import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o4ffp8zxl.css';
import '../../css/l/lpp6b5eoe.css';
import '../../css/m/mw42pob4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o4ffp8zxl"/><path class="lpp6b5eoe"/><path class="mw42pob4d"/></g>`,
		"fallback": "solar:bag-heart-line-duotone",
	});
}

export default Component;
