import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llh2aacvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llh2aacvh"/>`,
		"fallback": "withicons:file-down-solid",
	});
}

export default Component;
