import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wc-1fcbiq.css';
import '../../css/x/xt7vs4b0r.css';
import '../../css/q/qrelehzkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wc-1fcbiq"/><path clip-rule="evenodd" class="xt7vs4b0r"/><path class="qrelehzkh"/></g>`,
		"fallback": "gg:alarm",
	});
}

export default Component;
