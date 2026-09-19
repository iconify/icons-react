import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-w-5ou8b.css';
import '../../css/s/s3zxyvywo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n-w-5ou8b"/><path class="s3zxyvywo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:balloon",
	});
}

export default Component;
