import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rldvznx3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rldvznx3f"/>`,
		"fallback": "simple-icons:googleauthenticator",
	});
}

export default Component;
