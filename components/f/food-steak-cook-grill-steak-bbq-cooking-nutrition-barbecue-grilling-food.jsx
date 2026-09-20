import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vybz_3bof.css';
import '../../css/o/ot01b1b2v.css';
import '../../css/w/wwq9pacsb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vybz_3bof"/><path class="ot01b1b2v"/><circle class="wwq9pacsb"/></g>`,
		"fallback": "streamline:food-steak-cook-grill-steak-bbq-cooking-nutrition-barbecue-grilling-food",
	});
}

export default Component;
