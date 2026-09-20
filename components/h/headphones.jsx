import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/woki88b5x.css';
import '../../css/h/hdtrj8brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="woki88b5x"/><path class="hdtrj8brr"/></g>`,
		"fallback": "mynaui:headphones",
	});
}

export default Component;
