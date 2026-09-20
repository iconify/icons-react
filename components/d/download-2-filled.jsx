import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne__3rynp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne__3rynp"/>`,
		"fallback": "tdesign:download-2-filled",
	});
}

export default Component;
