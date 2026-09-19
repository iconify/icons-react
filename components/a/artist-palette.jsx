import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v017oobsr.css';
import '../../css/z/zeifo95uj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v017oobsr"/><path class="zeifo95uj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:artist-palette",
	});
}

export default Component;
