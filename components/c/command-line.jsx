import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf6hq7bex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf6hq7bex"/>`,
		"fallback": "ix:command-line",
	});
}

export default Component;
