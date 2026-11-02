import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on-v0u84l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on-v0u84l"/>`,
		"fallback": "mingcute:finger-tap-fill",
	});
}

export default Component;
