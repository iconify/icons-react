import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ad7wl963m.css';
import '../../css/n/nlcbroobe.css';
import '../../css/z/zzdvaient.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ad7wl963m"/><path class="nlcbroobe"/><path class="zzdvaient"/></g>`,
		"fallback": "reicon:hashtag2-filled",
	});
}

export default Component;
