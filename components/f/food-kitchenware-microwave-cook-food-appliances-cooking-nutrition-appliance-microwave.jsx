import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nwghkwnty.css';
import '../../css/q/q00x2qbis.css';
import '../../css/w/wfrztfb4v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="nwghkwnty"/><rect class="q00x2qbis"/><path class="wfrztfb4v"/></g>`,
		"fallback": "streamline:food-kitchenware-microwave-cook-food-appliances-cooking-nutrition-appliance-microwave",
	});
}

export default Component;
