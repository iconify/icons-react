import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ncir--e1f.css';
import '../../css/q/q1zl0lc0k.css';
import '../../css/s/s7i40lndy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ncir--e1f"/><path class="q1zl0lc0k"/><path class="s7i40lndy"/></g>`,
		"fallback": "hugeicons:ai-art",
	});
}

export default Component;
