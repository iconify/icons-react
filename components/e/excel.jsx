import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/o/o9u0n_bpm.css';
import '../../css/u/u1drtbcci.css';
import '../../css/h/h7b4_kivr.css';
import '../../css/v/vk1iioblf.css';
import '../../css/n/njuqbhbch.css';
import '../../css/f/fwi9vnbxl.css';
import '../../css/y/ycr6h7b8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="o9u0n_bpm"/><path class="u1drtbcci"/><path class="h7b4_kivr"/><path class="vk1iioblf"/><rect class="njuqbhbch"/><path class="fwi9vnbxl"/><path class="ycr6h7b8v"/></g>`,
		"fallback": "icon-park:excel",
	});
}

export default Component;
