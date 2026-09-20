import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nny353msn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nny353msn"/>`,
		"fallback": "streamline-sharp:drawing-compass-remix",
	});
}

export default Component;
