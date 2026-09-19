import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pd4m9rb7l.css';
import '../../css/u/u3izjxmsl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pd4m9rb7l"/><path class="u3izjxmsl"/></g>`,
		"fallback": "bi:envelope-open-heart-fill",
	});
}

export default Component;
