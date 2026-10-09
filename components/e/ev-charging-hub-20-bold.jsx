import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt4t1kbqx.css';
import '../../css/x/x-k2aqbil.css';
import '../../css/z/zd6bbv0yb.css';
import '../../css/y/yklljhbfl.css';
import '../../css/h/hs4lzx5nw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt4t1kbqx"/><path class="x-k2aqbil"/><path class="zd6bbv0yb"/><path class="yklljhbfl"/><path class="hs4lzx5nw"/>`,
		"fallback": "energy-icons:ev-charging-hub-20-bold",
	});
}

export default Component;
