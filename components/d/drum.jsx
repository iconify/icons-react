import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywpkpk12i.css';
import '../../css/j/j00ffub9z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ywpkpk12i"/><path class="j00ffub9z"/></g>`,
		"fallback": "fluent-emoji-high-contrast:drum",
	});
}

export default Component;
