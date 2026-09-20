import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0_xy5__y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0_xy5__y"/>`,
		"fallback": "tabler:brand-weibo",
	});
}

export default Component;
