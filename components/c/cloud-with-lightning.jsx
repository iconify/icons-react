import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udhbfsh1z.css';
import '../../css/y/yqa39phvf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="udhbfsh1z"/><path class="yqa39phvf"/></g>`,
		"fallback": "fluent-emoji-flat:cloud-with-lightning",
	});
}

export default Component;
