import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw-p7j4rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw-p7j4rb"/>`,
		"fallback": "mdi:folder-minus",
	});
}

export default Component;
