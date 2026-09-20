import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p783vz61b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p783vz61b"/>`,
		"fallback": "streamline-logos:alpine-linux-logo-block",
	});
}

export default Component;
