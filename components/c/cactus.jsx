import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_bx4-bom.css';
import '../../css/p/pe9nqsbht.css';
import '../../css/n/ne_8u4n5c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_bx4-bom"/><path class="pe9nqsbht"/><path class="ne_8u4n5c"/></g>`,
		"fallback": "fluent-emoji-flat:cactus",
	});
}

export default Component;
