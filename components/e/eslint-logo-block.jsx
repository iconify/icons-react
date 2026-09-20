import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp06wc4-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gp06wc4-i"/>`,
		"fallback": "streamline-logos:eslint-logo-block",
	});
}

export default Component;
