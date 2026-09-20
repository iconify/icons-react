import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf41albxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf41albxd"/>`,
		"fallback": "pixel:bullhorn",
	});
}

export default Component;
