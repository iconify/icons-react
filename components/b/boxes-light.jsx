import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/w1ng5qv0n.css';
import '../../css/v/vurhcqbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="w1ng5qv0n"/><path class="vurhcqbxv"/></g>`,
		"fallback": "lets-icons:boxes-light",
	});
}

export default Component;
