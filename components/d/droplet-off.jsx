import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dvak_t-6t.css';
import '../../css/j/jlp5vcjwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dvak_t-6t"/><path class="jlp5vcjwf"/></g>`,
		"fallback": "hugeicons:droplet-off",
	});
}

export default Component;
