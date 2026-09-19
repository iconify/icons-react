import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/u4lm23blg.css';
import '../../css/y/ycpyxh1kl.css';
import '../../css/k/kxs16xb2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="u4lm23blg"/><path class="ycpyxh1kl"/><path class="kxs16xb2x"/></g>`,
		"fallback": "icon-park-outline:id-card",
	});
}

export default Component;
