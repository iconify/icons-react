import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q23lvi2vj.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q23lvi2vj"/>`,
		"fallback": "fa6-regular:images",
	});
}

export default Component;
