import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_exy2bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_exy2bih"/>`,
		"fallback": "iconaut:bookmark-minus-solid",
	});
}

export default Component;
