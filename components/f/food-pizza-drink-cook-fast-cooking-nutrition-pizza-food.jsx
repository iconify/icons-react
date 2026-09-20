import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gbenb29wy.css';
import '../../css/h/hzuhm8ymx.css';
import '../../css/c/cpfj8fwdk.css';
import '../../css/e/e0-lg2-cu.css';
import '../../css/d/dlkvdcebj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gbenb29wy"/><path class="hzuhm8ymx"/><circle class="cpfj8fwdk"/><circle class="e0-lg2-cu"/><circle class="dlkvdcebj"/></g>`,
		"fallback": "streamline:food-pizza-drink-cook-fast-cooking-nutrition-pizza-food",
	});
}

export default Component;
