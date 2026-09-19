import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzk3tvg9r.css';
import '../../css/p/p6bye9boe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jzk3tvg9r"/><path class="p6bye9boe"/></g>`,
		"fallback": "fluent-emoji-flat:flexed-biceps-medium-dark",
	});
}

export default Component;
