import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouaz_3bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouaz_3bzx"/>`,
		"fallback": "majesticons:folder-plus-line",
	});
}

export default Component;
