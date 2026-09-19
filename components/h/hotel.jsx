import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q4v244bdo.css';
import '../../css/f/fxqd4zbiz.css';
import '../../css/y/yysj_8r7g.css';
import '../../css/c/co9nh8ais.css';
import '../../css/n/npvlzob8k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q4v244bdo"/><path class="fxqd4zbiz"/><path class="yysj_8r7g"/><path class="co9nh8ais"/><path class="npvlzob8k"/></g>`,
		"fallback": "fluent-emoji-flat:hotel",
	});
}

export default Component;
