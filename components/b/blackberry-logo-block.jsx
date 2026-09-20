import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmpzh7bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kmpzh7bns"/>`,
		"fallback": "streamline-logos:blackberry-logo-block",
	});
}

export default Component;
