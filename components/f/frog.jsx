import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mejwp-bwa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mejwp-bwa"/>`,
		"fallback": "fa7-solid:frog",
	});
}

export default Component;
