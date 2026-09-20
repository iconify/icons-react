import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydpf4kj9f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydpf4kj9f"/>`,
		"fallback": "pinhead:campsites",
	});
}

export default Component;
