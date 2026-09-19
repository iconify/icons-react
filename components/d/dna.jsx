import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yq0wk5xlw.css';
import '../../css/s/smf22umjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yq0wk5xlw"/><path class="smf22umjt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dna",
	});
}

export default Component;
