import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th097edbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="th097edbx"/>`,
		"fallback": "streamline-logos:google-ads-logo-block",
	});
}

export default Component;
