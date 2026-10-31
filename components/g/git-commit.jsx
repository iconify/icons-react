import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cffgsjvke.css';
import '../../css/t/tkha_o8sv.css';
import '../../css/e/e9npa2yyf.css';
import '../../css/w/wv2ht2uty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cffgsjvke wm-shadow"/><path class="tkha_o8sv"/><path class="e9npa2yyf"/><path class="wv2ht2uty"/></g>`,
		"fallback": "withicons-retro:git-commit",
	});
}

export default Component;
