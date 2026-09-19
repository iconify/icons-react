import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z601nxboe.css';
import '../../css/s/sh51lircq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z601nxboe"/><path class="sh51lircq"/>`,
		"fallback": "carbon:ibm-db2",
	});
}

export default Component;
