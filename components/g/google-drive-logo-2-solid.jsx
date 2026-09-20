import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd3qvte3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pd3qvte3e"/>`,
		"fallback": "streamline-logos:google-drive-logo-2-solid",
	});
}

export default Component;
