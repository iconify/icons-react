import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj4w1gb3h.css';
import '../../css/m/mf1yizbzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mj4w1gb3h"/><path class="mf1yizbzw"/></g>`,
		"fallback": "bi:emoji-neutral",
	});
}

export default Component;
