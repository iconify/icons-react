import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh4cx0b9t.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh4cx0b9t"/>`,
		"fallback": "system-uicons:cloud-disconnect",
	});
}

export default Component;
