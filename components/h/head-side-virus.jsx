import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1084qsxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1084qsxc"/>`,
		"fallback": "fa-solid:head-side-virus",
	});
}

export default Component;
