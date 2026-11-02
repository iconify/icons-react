import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da1jic_cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da1jic_cg"/>`,
		"fallback": "mingcute:cactus-2-fill",
	});
}

export default Component;
