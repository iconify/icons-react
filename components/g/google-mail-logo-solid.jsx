import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqt-0cbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vqt-0cbly"/>`,
		"fallback": "streamline-logos:google-mail-logo-solid",
	});
}

export default Component;
