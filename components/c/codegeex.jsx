import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fdi3tgbyw.css';
import '../../css/w/w80hy5b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fdi3tgbyw"/><path class="w80hy5b6j"/></g>`,
		"fallback": "thesvg:codegeex",
	});
}

export default Component;
