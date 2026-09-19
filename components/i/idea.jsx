import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdxce3pve.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdxce3pve"/>`,
		"fallback": "carbon:idea",
	});
}

export default Component;
