import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0otddbph.css';
import '../../css/o/oiq-zuuqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0otddbph"/><path class="oiq-zuuqy"/></g>`,
		"fallback": "reicon:hashtag3-filled",
	});
}

export default Component;
