import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt-3h5doh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lt-3h5doh"/>`,
		"fallback": "healthicons:blood-bag-24px",
	});
}

export default Component;
