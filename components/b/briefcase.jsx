import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1u28j_r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in1u28j_r"/>`,
		"fallback": "fa7-solid:briefcase",
	});
}

export default Component;
