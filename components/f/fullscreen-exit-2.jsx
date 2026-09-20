import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iem4vkb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iem4vkb-p"/>`,
		"fallback": "keyline-icons:fullscreen-exit-2",
	});
}

export default Component;
