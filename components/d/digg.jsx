import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj7h6gphw.css';

const viewBox = {"width":2048,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj7h6gphw"/>`,
		"fallback": "fa:digg",
	});
}

export default Component;
