import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggrv6-bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggrv6-bhg"/>`,
		"fallback": "mingcute:danmaku-line",
	});
}

export default Component;
