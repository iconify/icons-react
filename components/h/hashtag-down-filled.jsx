import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0bcgjzbp.css';
import '../../css/n/nqbikvqvq.css';
import '../../css/i/idx0gnbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e0bcgjzbp"/><path class="nqbikvqvq"/><path class="idx0gnbqq"/></g>`,
		"fallback": "reicon:hashtag-down-filled",
	});
}

export default Component;
