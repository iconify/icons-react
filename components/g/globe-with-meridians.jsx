import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4_utgbeg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c4_utgbeg"/>`,
		"fallback": "fluent-emoji-high-contrast:globe-with-meridians",
	});
}

export default Component;
