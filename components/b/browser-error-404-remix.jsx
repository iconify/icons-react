import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euw5a4tua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="euw5a4tua"/>`,
		"fallback": "streamline-sharp:browser-error-404-remix",
	});
}

export default Component;
