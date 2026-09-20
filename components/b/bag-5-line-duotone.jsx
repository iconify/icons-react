import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nnbq32cap.css';
import '../../css/m/mw42pob4d.css';
import '../../css/a/aolr0lbho.css';
import '../../css/e/em31w8bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nnbq32cap"/><path class="mw42pob4d"/><path class="aolr0lbho"/><path class="em31w8bed"/></g>`,
		"fallback": "solar:bag-5-line-duotone",
	});
}

export default Component;
