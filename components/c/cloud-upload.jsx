import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faj9-9r7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faj9-9r7v"/>`,
		"fallback": "bxs:cloud-upload",
	});
}

export default Component;
