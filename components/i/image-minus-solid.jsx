import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od1c0fb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od1c0fb7j"/>`,
		"fallback": "iconaut:image-minus-solid",
	});
}

export default Component;
