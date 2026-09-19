import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivxjur8vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivxjur8vk"/>`,
		"fallback": "iconamoon:arrow-top-left-2",
	});
}

export default Component;
