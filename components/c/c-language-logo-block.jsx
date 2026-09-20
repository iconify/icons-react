import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up54fzbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="up54fzbng"/>`,
		"fallback": "streamline-logos:c-language-logo-block",
	});
}

export default Component;
