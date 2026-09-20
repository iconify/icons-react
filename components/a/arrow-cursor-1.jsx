import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v87d7wbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v87d7wbet"/>`,
		"fallback": "streamline-sharp:arrow-cursor-1",
	});
}

export default Component;
