import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7xmh9s8j.css';
import '../../css/f/f2drsob5a.css';
import '../../css/o/onf5sqgqe.css';
import '../../css/f/fnize7bxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7xmh9s8j"/><path class="f2drsob5a"/><path class="onf5sqgqe"/><path class="fnize7bxd"/></g>`,
		"fallback": "fluent-emoji-flat:airplane",
	});
}

export default Component;
