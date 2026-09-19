import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k25u__b7y.css';
import '../../css/c/cd7behbld.css';
import '../../css/r/rarfwo6sf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k25u__b7y"/><path class="cd7behbld"/><path class="rarfwo6sf"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed-medium-dark",
	});
}

export default Component;
