import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hxngvybzd.css';
import '../../css/a/ak26lrgin.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hxngvybzd"/><path class="ak26lrgin"/></g>`,
		"fallback": "si-glyph:cpu",
	});
}

export default Component;
