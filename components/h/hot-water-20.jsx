import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz5_qkdfv.css';
import '../../css/m/mu_rg1b1t.css';
import '../../css/w/wpp7bqbdr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz5_qkdfv"/><path class="mu_rg1b1t"/><path class="wpp7bqbdr"/>`,
		"fallback": "energy-icons:hot-water-20",
	});
}

export default Component;
