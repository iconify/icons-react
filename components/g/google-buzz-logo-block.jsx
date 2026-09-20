import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv3r98bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qv3r98bis"/>`,
		"fallback": "streamline-logos:google-buzz-logo-block",
	});
}

export default Component;
