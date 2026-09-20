import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg0lr7rfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gg0lr7rfc"/>`,
		"fallback": "streamline-logos:code-sandbox-logo-solid",
	});
}

export default Component;
