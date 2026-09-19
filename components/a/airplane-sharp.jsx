import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq1jtnbsx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq1jtnbsx"/>`,
		"fallback": "famicons:airplane-sharp",
	});
}

export default Component;
