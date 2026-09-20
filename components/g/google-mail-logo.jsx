import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbe977vdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbe977vdr"/>`,
		"fallback": "streamline-logos:google-mail-logo",
	});
}

export default Component;
