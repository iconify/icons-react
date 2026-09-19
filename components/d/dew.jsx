import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb7nz4lfq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb7nz4lfq"/>`,
		"fallback": "cryptocurrency:dew",
	});
}

export default Component;
