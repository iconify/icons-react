import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk1uindtb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk1uindtb"/>`,
		"fallback": "f7:archivebox",
	});
}

export default Component;
