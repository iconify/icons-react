import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh6d9rdxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gh6d9rdxd"/>`,
		"fallback": "streamline-logos:bugsnag-logo-solid",
	});
}

export default Component;
