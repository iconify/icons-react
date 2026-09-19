import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agku-_b4q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agku-_b4q"/>`,
		"fallback": "fa-solid:image",
	});
}

export default Component;
