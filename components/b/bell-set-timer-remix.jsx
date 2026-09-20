import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbk7imy3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbk7imy3h"/>`,
		"fallback": "streamline-sharp:bell-set-timer-remix",
	});
}

export default Component;
