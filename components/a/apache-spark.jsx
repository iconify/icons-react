import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh3su9blv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh3su9blv"/>`,
		"fallback": "cib:apache-spark",
	});
}

export default Component;
