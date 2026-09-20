import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzzs7mk9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rzzs7mk9z"/>`,
		"fallback": "streamline-sharp:inbox-post-remix",
	});
}

export default Component;
