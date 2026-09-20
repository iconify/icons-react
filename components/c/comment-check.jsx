import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzizi45yj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzizi45yj"/>`,
		"fallback": "mdi:comment-check",
	});
}

export default Component;
