import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj6m8xbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj6m8xbrg"/>`,
		"fallback": "hugeicons:file-chart-column-increasing",
	});
}

export default Component;
