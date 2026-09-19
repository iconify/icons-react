import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntx99c38x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntx99c38x"/>`,
		"fallback": "bx:bxs-file-image",
	});
}

export default Component;
