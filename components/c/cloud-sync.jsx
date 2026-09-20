import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg6pjbb_x.css';
import '../../css/l/l70ob6bam.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg6pjbb_x"/><path class="l70ob6bam"/>`,
		"fallback": "lineicons:cloud-sync",
	});
}

export default Component;
