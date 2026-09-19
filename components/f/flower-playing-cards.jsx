import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/czbk68b1i.css';
import '../../css/a/af7v1pb9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="czbk68b1i"/><path class="af7v1pb9u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:flower-playing-cards",
	});
}

export default Component;
