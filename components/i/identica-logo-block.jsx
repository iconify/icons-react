import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eceub-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l5eceub-s"/>`,
		"fallback": "streamline-logos:identica-logo-block",
	});
}

export default Component;
