import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9dv82bum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d9dv82bum"/>`,
		"fallback": "streamline-logos:google-meet-logo-solid",
	});
}

export default Component;
