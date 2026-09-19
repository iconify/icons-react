import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w-1c8gqjv.css';
import '../../css/a/a73y9lsqi.css';
import '../../css/a/avujdqbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w-1c8gqjv"/><path class="a73y9lsqi"/><path class="avujdqbmn"/></g>`,
		"fallback": "hugeicons:bed-double",
	});
}

export default Component;
