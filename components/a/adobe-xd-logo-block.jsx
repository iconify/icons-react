import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um76j9znb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="um76j9znb"/>`,
		"fallback": "streamline-logos:adobe-xd-logo-block",
	});
}

export default Component;
