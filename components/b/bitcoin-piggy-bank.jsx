import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dwf3mjbwo.css';
import '../../css/h/h4saa0b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dwf3mjbwo"/><path class="h4saa0b0q"/></g>`,
		"fallback": "hugeicons:bitcoin-piggy-bank",
	});
}

export default Component;
