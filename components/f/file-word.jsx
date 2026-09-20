import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1f2bvbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1f2bvbaq"/>`,
		"fallback": "prime:file-word",
	});
}

export default Component;
