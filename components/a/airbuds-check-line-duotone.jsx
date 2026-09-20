import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tslmujbuk.css';
import '../../css/s/s2gsuob4v.css';
import '../../css/n/ncksa-wla.css';
import '../../css/e/epfmi3b_p.css';
import '../../css/g/gd6-t-b2x.css';
import '../../css/x/x065vwpjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tslmujbuk"/><path class="s2gsuob4v"/><path class="ncksa-wla"/><path class="epfmi3b_p"/><circle class="gd6-t-b2x"/><path class="x065vwpjs"/></g>`,
		"fallback": "solar:airbuds-check-line-duotone",
	});
}

export default Component;
