import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1zokhhls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1zokhhls"/>`,
		"fallback": "ix:controller-device-safety",
	});
}

export default Component;
