import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/icz0-ubxj.css';
import '../../css/s/sj2jncbna.css';
import '../../css/o/odm-58bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="icz0-ubxj"/><path class="sj2jncbna"/><path class="odm-58bur"/></g>`,
		"fallback": "proicons:clipboard-search",
	});
}

export default Component;
