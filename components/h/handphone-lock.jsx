import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c3jh69bya.css';
import '../../css/c/ctlfexbyf.css';
import '../../css/w/wf8x63b-x.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c3jh69bya"/><path class="ctlfexbyf"/><path class="wf8x63b-x"/></g>`,
		"fallback": "marketeq:handphone-lock",
	});
}

export default Component;
