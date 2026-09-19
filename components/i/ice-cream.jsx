import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yar687r9u.css';
import '../../css/z/zety2tq-o.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yar687r9u"/><path class="zety2tq-o"/></g>`,
		"fallback": "si-glyph:ice-cream",
	});
}

export default Component;
