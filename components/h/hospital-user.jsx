import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bam1n0b-u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bam1n0b-u"/>`,
		"fallback": "fa7-solid:hospital-user",
	});
}

export default Component;
