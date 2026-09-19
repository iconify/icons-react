import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbw0lvbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbw0lvbdg"/>`,
		"fallback": "fe:arrow-up",
	});
}

export default Component;
