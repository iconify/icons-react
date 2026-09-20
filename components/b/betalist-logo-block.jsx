import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkmv4-31v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hkmv4-31v"/>`,
		"fallback": "streamline-logos:betalist-logo-block",
	});
}

export default Component;
