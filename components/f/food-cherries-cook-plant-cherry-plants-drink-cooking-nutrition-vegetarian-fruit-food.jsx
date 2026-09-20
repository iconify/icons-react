import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n6ky22g8w.css';
import '../../css/y/yg216cbzy.css';
import '../../css/n/n5jcliugi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="n6ky22g8w"/><circle class="yg216cbzy"/><path class="n5jcliugi"/></g>`,
		"fallback": "streamline:food-cherries-cook-plant-cherry-plants-drink-cooking-nutrition-vegetarian-fruit-food",
	});
}

export default Component;
