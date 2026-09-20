import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1a1f6wsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1a1f6wsl"/>`,
		"fallback": "mdi:emoji-cat",
	});
}

export default Component;
