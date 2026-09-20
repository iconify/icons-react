import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4597xbuu.css';
import '../../css/x/xrgvwubzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4597xbuu"/><path class="xrgvwubzt"/>`,
		"fallback": "mingcute:heavy-rainstorm-fill",
	});
}

export default Component;
