import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v34kx-pat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v34kx-pat"/>`,
		"fallback": "streamline-logos:dropbox-logo-1-solid",
	});
}

export default Component;
