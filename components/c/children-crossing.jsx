import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdr04vb7l.css';
import '../../css/a/avkxuhwwr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gdr04vb7l"/><path class="avkxuhwwr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:children-crossing",
	});
}

export default Component;
