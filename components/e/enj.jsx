import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_ytcgq8z.css';
import '../../css/x/xmdzgnb7l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="k_ytcgq8z"/><path class="xmdzgnb7l"/></g>`,
		"fallback": "cryptocurrency-color:enj",
	});
}

export default Component;
