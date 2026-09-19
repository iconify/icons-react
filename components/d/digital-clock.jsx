import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0jf3ybrz.css';
import '../../css/s/skwzrbbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f0jf3ybrz"/><path class="skwzrbbbj"/></g>`,
		"fallback": "hugeicons:digital-clock",
	});
}

export default Component;
