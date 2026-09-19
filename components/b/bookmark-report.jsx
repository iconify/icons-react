import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxb8z-bes.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxb8z-bes"/>`,
		"fallback": "fluent-mdl2:bookmark-report",
	});
}

export default Component;
