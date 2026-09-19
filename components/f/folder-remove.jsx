import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xrfbgub3m.css';
import '../../css/r/r0lwmzbnm.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xrfbgub3m"/><path class="r0lwmzbnm"/></g>`,
		"fallback": "si-glyph:folder-remove",
	});
}

export default Component;
