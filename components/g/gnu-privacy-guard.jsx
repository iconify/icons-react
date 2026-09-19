import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7yodhbjh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7yodhbjh"/>`,
		"fallback": "cib:gnu-privacy-guard",
	});
}

export default Component;
