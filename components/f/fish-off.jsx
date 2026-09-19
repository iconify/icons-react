import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s76bpeced.css';
import '../../css/f/fii87ouhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s76bpeced"/><path class="fii87ouhr"/></g>`,
		"fallback": "hugeicons:fish-off",
	});
}

export default Component;
