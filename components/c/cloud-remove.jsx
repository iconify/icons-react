import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/muuwgwuyk.css';
import '../../css/m/mk-by7b4p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="muuwgwuyk"/><path class="mk-by7b4p"/></g>`,
		"fallback": "si-glyph:cloud-remove",
	});
}

export default Component;
