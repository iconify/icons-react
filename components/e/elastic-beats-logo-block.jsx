import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzlwo8b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uzlwo8b7z"/>`,
		"fallback": "streamline-logos:elastic-beats-logo-block",
	});
}

export default Component;
