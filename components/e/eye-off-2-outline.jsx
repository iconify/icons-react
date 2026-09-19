import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo3k9d0ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo3k9d0ky"/>`,
		"fallback": "eva:eye-off-2-outline",
	});
}

export default Component;
