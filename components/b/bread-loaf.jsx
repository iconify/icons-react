import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d55x_6biy.css';
import '../../css/r/rpd7zmbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d55x_6biy"/><path class="rpd7zmbwt"/></g>`,
		"fallback": "streamline-ultimate:bread-loaf",
	});
}

export default Component;
