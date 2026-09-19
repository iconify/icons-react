import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp3tad87r.css';
import '../../css/h/hbgkxabbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp3tad87r"/><path class="hbgkxabbi"/>`,
		"fallback": "boxicons:cat-body-filled",
	});
}

export default Component;
