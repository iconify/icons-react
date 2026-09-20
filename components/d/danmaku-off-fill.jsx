import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ass7ltv7w.css';
import '../../css/c/cu4o4vbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ass7ltv7w"/><path clip-rule="evenodd" class="cu4o4vbry"/>`,
		"fallback": "mingcute:danmaku-off-fill",
	});
}

export default Component;
