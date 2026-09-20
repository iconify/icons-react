import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/titb3kk7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="titb3kk7r"/>`,
		"fallback": "streamline-logos:codepen-logo-block",
	});
}

export default Component;
