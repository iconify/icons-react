import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vabi4ybbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vabi4ybbj"/>`,
		"fallback": "solar:bill-check-outline",
	});
}

export default Component;
