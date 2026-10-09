import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4bjo-bjt.css';
import '../../css/t/tiuaiabal.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4bjo-bjt"/><path class="tiuaiabal"/>`,
		"fallback": "energy-icons:bearing-20",
	});
}

export default Component;
