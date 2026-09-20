import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmvu6ublf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vmvu6ublf"/>`,
		"fallback": "streamline-sharp:incognito-mode-solid",
	});
}

export default Component;
