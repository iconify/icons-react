import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3i1l743g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3i1l743g"/>`,
		"fallback": "fa6-solid:fax",
	});
}

export default Component;
