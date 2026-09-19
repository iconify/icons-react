import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ti_c42yjj.css';
import '../../css/o/o64akqbob.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ti_c42yjj"/><path class="o64akqbob"/></g>`,
		"fallback": "fluent-emoji-high-contrast:auto-rickshaw",
	});
}

export default Component;
