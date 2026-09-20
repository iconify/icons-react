import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8u5iic6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m8u5iic6a"/>`,
		"fallback": "streamline-logos:disney-plus-logo-block",
	});
}

export default Component;
