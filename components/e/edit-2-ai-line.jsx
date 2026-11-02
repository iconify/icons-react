import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvvo5_beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvvo5_beu"/>`,
		"fallback": "mingcute:edit-2-ai-line",
	});
}

export default Component;
