import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st_46oxgj.css';

const viewBox = {"width":18,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st_46oxgj"/>`,
		"fallback": "icomoon-free:bubbles",
	});
}

export default Component;
