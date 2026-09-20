import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dxw8tob6b.css';
import '../../css/r/rb1go8b8k.css';
import '../../css/j/jungtnbno.css';
import '../../css/f/f1abxubzw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dxw8tob6b"/><path class="rb1go8b8k"/><path class="jungtnbno"/><circle class="f1abxubzw"/></g>`,
		"fallback": "streamline:food-meat-cook-meat-cown-slice-organic-cooking-nutrition-food",
	});
}

export default Component;
