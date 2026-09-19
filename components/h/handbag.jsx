import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chppv6gvb.css';
import '../../css/x/xroeuubvg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chppv6gvb"/><path class="xroeuubvg"/></g>`,
		"fallback": "fluent-emoji-flat:handbag",
	});
}

export default Component;
