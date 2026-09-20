import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gvb8_qb7z.css';
import '../../css/h/hymb0ytpi.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gvb8_qb7z"/><path class="hymb0ytpi"/></g>`,
		"fallback": "marketeq:armchair-4",
	});
}

export default Component;
