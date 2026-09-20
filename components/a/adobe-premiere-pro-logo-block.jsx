import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3kr0dbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k3kr0dbyr"/>`,
		"fallback": "streamline-logos:adobe-premiere-pro-logo-block",
	});
}

export default Component;
