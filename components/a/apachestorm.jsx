import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk51emb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk51emb4e"/>`,
		"fallback": "simple-icons:apachestorm",
	});
}

export default Component;
