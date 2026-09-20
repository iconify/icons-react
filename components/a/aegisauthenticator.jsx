import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzq3d7bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzq3d7bos"/>`,
		"fallback": "simple-icons:aegisauthenticator",
	});
}

export default Component;
