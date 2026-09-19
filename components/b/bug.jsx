import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdkt96b7u.css';
import '../../css/h/hfzaf2b6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hdkt96b7u"/><path class="hfzaf2b6v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bug",
	});
}

export default Component;
