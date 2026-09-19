import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ked307bql.css';
import '../../css/t/tewi3dogl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ked307bql"/><path class="tewi3dogl"/></g>`,
		"fallback": "fluent-emoji-flat:cookie",
	});
}

export default Component;
