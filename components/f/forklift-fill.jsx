import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xae4x2bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xae4x2bpg"/>`,
		"fallback": "mingcute:forklift-fill",
	});
}

export default Component;
