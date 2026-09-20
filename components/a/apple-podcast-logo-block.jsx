import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iymvk1-up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iymvk1-up"/>`,
		"fallback": "streamline-logos:apple-podcast-logo-block",
	});
}

export default Component;
