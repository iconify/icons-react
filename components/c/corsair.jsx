import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1v1xeb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1v1xeb2r"/>`,
		"fallback": "simple-icons:corsair",
	});
}

export default Component;
