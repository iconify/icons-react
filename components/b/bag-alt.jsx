import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/q8l-bsm4k.css';
import '../../css/k/kmemqbcet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="q8l-bsm4k"/><path class="kmemqbcet"/></g>`,
		"fallback": "lets-icons:bag-alt",
	});
}

export default Component;
