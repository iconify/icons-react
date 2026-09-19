import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k375yqbsu.css';
import '../../css/h/hwrr_1buw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k375yqbsu"/><path class="hwrr_1buw"/></g>`,
		"fallback": "si-glyph:document-arrow-down",
	});
}

export default Component;
