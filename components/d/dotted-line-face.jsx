import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-wowdbgx.css';
import '../../css/t/tpt91hf7v.css';
import '../../css/g/gk8w0lbff.css';
import '../../css/l/l0ee79b0u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-wowdbgx"/><path class="tpt91hf7v"/><path class="gk8w0lbff"/><path class="l0ee79b0u"/></g>`,
		"fallback": "fluent-emoji-flat:dotted-line-face",
	});
}

export default Component;
