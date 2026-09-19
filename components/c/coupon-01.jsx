import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jas8p7bhq.css';
import '../../css/l/l9chowsfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jas8p7bhq"/><path class="l9chowsfs"/></g>`,
		"fallback": "hugeicons:coupon-01",
	});
}

export default Component;
