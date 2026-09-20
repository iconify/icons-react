import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pemoh6p9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pemoh6p9j"/>`,
		"fallback": "solar:bot-bold",
	});
}

export default Component;
