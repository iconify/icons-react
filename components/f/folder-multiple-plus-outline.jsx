import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmw2i_yzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmw2i_yzh"/>`,
		"fallback": "mdi:folder-multiple-plus-outline",
	});
}

export default Component;
