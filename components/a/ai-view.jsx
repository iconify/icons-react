import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lqzqcbbfi.css';
import '../../css/q/qom7skb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lqzqcbbfi"/><path class="qom7skb0i"/></g>`,
		"fallback": "hugeicons:ai-view",
	});
}

export default Component;
