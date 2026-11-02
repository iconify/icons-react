import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6hpb75pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6hpb75pc"/>`,
		"fallback": "mingcute:floating-dust-fill",
	});
}

export default Component;
