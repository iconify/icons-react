import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjq1h0isb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjq1h0isb"/>`,
		"fallback": "file-icons:codeship",
	});
}

export default Component;
