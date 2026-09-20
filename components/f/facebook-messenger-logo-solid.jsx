import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhevecb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uhevecb7h"/>`,
		"fallback": "streamline-logos:facebook-messenger-logo-solid",
	});
}

export default Component;
