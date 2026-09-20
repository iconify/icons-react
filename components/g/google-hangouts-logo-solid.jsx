import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3c1b2blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v3c1b2blk"/>`,
		"fallback": "streamline-logos:google-hangouts-logo-solid",
	});
}

export default Component;
