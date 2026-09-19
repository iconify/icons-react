import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alssx_b8m.css';

const viewBox = {"width":18,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alssx_b8m"/>`,
		"fallback": "icomoon-free:bubbles4",
	});
}

export default Component;
