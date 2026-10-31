import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozh7-gzxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozh7-gzxl"/>`,
		"fallback": "coolicons:component-instance-bulk-round",
	});
}

export default Component;
