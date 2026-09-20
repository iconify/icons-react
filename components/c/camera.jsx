import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzywbeb3l.css';
import '../../css/x/xfwzrg6lm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rzywbeb3l"/><path class="xfwzrg6lm"/></g>`,
		"fallback": "proicons:camera",
	});
}

export default Component;
