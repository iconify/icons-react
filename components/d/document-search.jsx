import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/if57r5xuo.css';
import '../../css/u/uonvdubjz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="if57r5xuo"/><path class="uonvdubjz"/></g>`,
		"fallback": "si-glyph:document-search",
	});
}

export default Component;
