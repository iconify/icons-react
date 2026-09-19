import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-pp2gt8y.css';
import '../../css/l/lb01nbckg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q-pp2gt8y"/><path class="lb01nbckg"/></g>`,
		"fallback": "si-glyph:clip",
	});
}

export default Component;
