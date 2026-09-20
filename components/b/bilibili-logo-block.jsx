import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca8yc2baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ca8yc2baq"/>`,
		"fallback": "streamline-logos:bilibili-logo-block",
	});
}

export default Component;
