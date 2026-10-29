import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tjorni2cj.css';
import '../../css/r/r7d5rmbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tjorni2cj"/><path class="r7d5rmbtt wm-a"/></g>`,
		"fallback": "withicons:chinese-knot-solid",
	});
}

export default Component;
