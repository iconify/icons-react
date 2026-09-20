import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/ht-5a8k-f.css';
import '../../css/e/egs66zbgb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="ht-5a8k-f"/><path class="egs66zbgb"/></g>`,
		"fallback": "streamline:food-kitchenware-refrigerator-fridge-cook-appliances-cooking-nutrition-freezer-appliance-food",
	});
}

export default Component;
