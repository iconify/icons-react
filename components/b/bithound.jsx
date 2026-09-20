import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omo6m3bky.css';
import '../../css/n/nttd48xax.css';
import '../../css/z/zj8owxbjo.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="omo6m3bky"><path class="nttd48xax"/><path class="zj8owxbjo"/></g>`,
		"fallback": "material-icon-theme:bithound",
	});
}

export default Component;
