import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftr8m-ovk.css';
import '../../css/q/q4xt-6b4w.css';
import '../../css/p/pn65m_b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ftr8m-ovk"/><path clip-rule="evenodd" class="q4xt-6b4w"/><path class="pn65m_b8s"/></g>`,
		"fallback": "reicon:blur",
	});
}

export default Component;
