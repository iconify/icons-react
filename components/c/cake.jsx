import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/akpyus1jy.css';
import '../../css/b/bwm8uxbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="akpyus1jy"/><path class="bwm8uxbpc"/></g>`,
		"fallback": "proicons:cake",
	});
}

export default Component;
