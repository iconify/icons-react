import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kezs73bkc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kezs73bkc"/>`,
		"fallback": "fa7-regular:file-excel",
	});
}

export default Component;
