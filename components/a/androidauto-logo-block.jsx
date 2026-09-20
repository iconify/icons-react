import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhr-1eb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dhr-1eb_k"/>`,
		"fallback": "streamline-logos:androidauto-logo-block",
	});
}

export default Component;
