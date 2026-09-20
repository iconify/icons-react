import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t38qr0est.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t38qr0est"/>`,
		"fallback": "lets-icons:check-round-fill",
	});
}

export default Component;
