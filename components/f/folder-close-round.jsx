import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i58h6jb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i58h6jb5t"/>`,
		"fallback": "coolicons:folder-close-round",
	});
}

export default Component;
