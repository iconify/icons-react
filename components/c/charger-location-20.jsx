import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crgylcbgx.css';
import '../../css/j/j_uf38bmg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crgylcbgx"/><path class="j_uf38bmg"/>`,
		"fallback": "energy-icons:charger-location-20",
	});
}

export default Component;
