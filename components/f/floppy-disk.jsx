import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evjs23bwa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evjs23bwa"/>`,
		"fallback": "fa7-solid:floppy-disk",
	});
}

export default Component;
