import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4i3ki2pe.css';
import '../../css/v/v_hbrccao.css';
import '../../css/z/z21ut7bfm.css';
import '../../css/k/krj2or7of.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4i3ki2pe"/><path class="v_hbrccao"/><path class="z21ut7bfm"/><path class="krj2or7of"/></g>`,
		"fallback": "fluent-emoji-flat:calendar",
	});
}

export default Component;
