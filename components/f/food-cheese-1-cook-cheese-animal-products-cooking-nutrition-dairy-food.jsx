import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n70q_f8uv.css';
import '../../css/n/nik865bpl.css';
import '../../css/s/snb4dlb0c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n70q_f8uv"/><circle class="nik865bpl"/><circle class="snb4dlb0c"/></g>`,
		"fallback": "streamline:food-cheese-1-cook-cheese-animal-products-cooking-nutrition-dairy-food",
	});
}

export default Component;
