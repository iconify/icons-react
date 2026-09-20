import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cahc_o56u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cahc_o56u"/>`,
		"fallback": "streamline-logos:google-podcast-logo",
	});
}

export default Component;
