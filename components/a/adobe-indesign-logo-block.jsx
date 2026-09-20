import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxb47rbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxb47rbac"/>`,
		"fallback": "streamline-logos:adobe-indesign-logo-block",
	});
}

export default Component;
