import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq1z-kbme.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq1z-kbme"/>`,
		"fallback": "fa7-solid:info-circle",
	});
}

export default Component;
