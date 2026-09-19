import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk1f5g_bz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk1f5g_bz"/>`,
		"fallback": "dinkie-icons:floppy-disk-small",
	});
}

export default Component;
