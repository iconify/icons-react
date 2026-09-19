import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhka-gl7n.css';
import '../../css/c/c5wmubbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhka-gl7n"/><path class="c5wmubbxn"/></g>`,
		"fallback": "iconoir:credit-cards",
	});
}

export default Component;
