import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igi6jx_0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="igi6jx_0k"/>`,
		"fallback": "streamline-logos:gowalla-logo-3-solid",
	});
}

export default Component;
