import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj3mtbc7u.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj3mtbc7u"/>`,
		"fallback": "ls:chrome",
	});
}

export default Component;
