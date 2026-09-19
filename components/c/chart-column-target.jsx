import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn0-u2b-e.css';
import '../../css/i/i4_lnxbyy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn0-u2b-e"/><path class="i4_lnxbyy"/>`,
		"fallback": "carbon:chart-column-target",
	});
}

export default Component;
