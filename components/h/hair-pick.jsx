import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aedi_3b1c.css';
import '../../css/k/k6nc9zbxo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aedi_3b1c"/><path clip-rule="evenodd" class="k6nc9zbxo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hair-pick",
	});
}

export default Component;
