import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib9lzd7wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ib9lzd7wg"/>`,
		"fallback": "solar:document-add-outline",
	});
}

export default Component;
