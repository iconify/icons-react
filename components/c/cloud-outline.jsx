import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcq4w6wrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fcq4w6wrl"/>`,
		"fallback": "basil:cloud-outline",
	});
}

export default Component;
