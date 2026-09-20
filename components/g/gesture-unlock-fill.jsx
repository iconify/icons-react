import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvxx9rbxb.css';
import '../../css/i/iz0l5_b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zvxx9rbxb"/><path clip-rule="evenodd" class="iz0l5_b0a"/>`,
		"fallback": "mingcute:gesture-unlock-fill",
	});
}

export default Component;
