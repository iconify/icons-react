import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbu8cib5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbu8cib5y"/>`,
		"fallback": "boxicons:folder-heart-filled",
	});
}

export default Component;
