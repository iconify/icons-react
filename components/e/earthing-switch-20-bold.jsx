import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwejfdz7y.css';
import '../../css/p/pksimbbzc.css';
import '../../css/h/hoizzqbxs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwejfdz7y"/><path class="pksimbbzc"/><path class="hoizzqbxs"/>`,
		"fallback": "energy-icons:earthing-switch-20-bold",
	});
}

export default Component;
