import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlrkmb38s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rlrkmb38s"/>`,
		"fallback": "streamline-logos:email-logo-solid",
	});
}

export default Component;
