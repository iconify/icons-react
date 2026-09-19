import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jj5tbmgit.css';
import '../../css/o/o422zab0r.css';
import '../../css/j/jz8bpeblu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jj5tbmgit"/><path class="o422zab0r"/><path class="jz8bpeblu"/></g>`,
		"fallback": "fluent-emoji-flat:curling-stone",
	});
}

export default Component;
