import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs0o44c0b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs0o44c0b"/>`,
		"fallback": "fa7-solid:elevator",
	});
}

export default Component;
