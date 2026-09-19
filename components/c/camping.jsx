import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjia_qpej.css';
import '../../css/o/o5wyghm2r.css';
import '../../css/h/h8hoiacte.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bjia_qpej"/><path class="o5wyghm2r"/><path class="h8hoiacte"/></g>`,
		"fallback": "fluent-emoji-high-contrast:camping",
	});
}

export default Component;
