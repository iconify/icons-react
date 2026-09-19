import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwh0abcrn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwh0abcrn"/>`,
		"fallback": "fa7-solid:arrow-circle-left",
	});
}

export default Component;
