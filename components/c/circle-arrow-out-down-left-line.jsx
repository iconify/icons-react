import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj_ymgb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj_ymgb-s"/>`,
		"fallback": "mingcute:circle-arrow-out-down-left-line",
	});
}

export default Component;
