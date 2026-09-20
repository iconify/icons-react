import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whx76-5qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whx76-5qm"/>`,
		"fallback": "streamline-logos:500px-logo-1-solid",
	});
}

export default Component;
