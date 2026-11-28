import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbym7lbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbym7lbuk"/>`,
		"fallback": "iconaut:blocks-solid",
	});
}

export default Component;
