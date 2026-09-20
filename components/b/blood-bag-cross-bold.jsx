import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o300w3m6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o300w3m6d"/>`,
		"fallback": "streamline-ultimate:blood-bag-cross-bold",
	});
}

export default Component;
