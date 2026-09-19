import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0tan9jgf.css';
import '../../css/f/f_tab8g_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0tan9jgf"/><path clip-rule="evenodd" class="f_tab8g_a"/>`,
		"fallback": "basil:folder-delete-outline",
	});
}

export default Component;
