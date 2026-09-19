import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1774m7wa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1774m7wa"/>`,
		"fallback": "whh:bowling",
	});
}

export default Component;
