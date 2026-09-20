import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0bcgjzbp.css';
import '../../css/n/nqbikvqvq.css';
import '../../css/p/pwuw15ykf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e0bcgjzbp"/><path class="nqbikvqvq"/><path class="pwuw15ykf"/></g>`,
		"fallback": "reicon:hashtag-up-filled",
	});
}

export default Component;
