import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsm3uwb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsm3uwb5z"/>`,
		"fallback": "boxicons:block",
	});
}

export default Component;
