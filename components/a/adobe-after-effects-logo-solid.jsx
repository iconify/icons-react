import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llgm2lbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="llgm2lbfb"/>`,
		"fallback": "streamline-logos:adobe-after-effects-logo-solid",
	});
}

export default Component;
