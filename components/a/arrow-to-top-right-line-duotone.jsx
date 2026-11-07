import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u6_udqbqw.css';
import '../../css/z/zwy4hqbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u6_udqbqw"/><path class="zwy4hqbgn"/></g>`,
		"fallback": "solar:arrow-to-top-right-line-duotone",
	});
}

export default Component;
