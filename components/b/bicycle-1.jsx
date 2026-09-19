import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nu5xqlbrc.css';
import '../../css/h/hqvw7kbrn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nu5xqlbrc"/><path class="hqvw7kbrn"/></g>`,
		"fallback": "si-glyph:bicycle-1",
	});
}

export default Component;
