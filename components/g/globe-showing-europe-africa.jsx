import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pn4nwmbpt.css';
import '../../css/l/lul-6ye9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pn4nwmbpt"/><path clip-rule="evenodd" class="lul-6ye9e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:globe-showing-europe-africa",
	});
}

export default Component;
