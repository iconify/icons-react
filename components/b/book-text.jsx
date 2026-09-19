import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j733oxb3i.css';
import '../../css/z/zlhh38l7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j733oxb3i"/><path class="zlhh38l7r"/></g>`,
		"fallback": "hugeicons:book-text",
	});
}

export default Component;
