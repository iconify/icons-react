import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewnc5nb5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewnc5nb5w"/>`,
		"fallback": "file-icons:flask",
	});
}

export default Component;
