import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dhtouukmn.css';
import '../../css/h/h1imwhs5j.css';
import '../../css/k/k1i6v8min.css';
import '../../css/s/sjl6j_bve.css';
import '../../css/t/tci3qvbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dhtouukmn"/><path class="h1imwhs5j"/><path class="k1i6v8min"/><path class="sjl6j_bve"/><path class="tci3qvbwv"/></g>`,
		"fallback": "iconoir:arcade",
	});
}

export default Component;
