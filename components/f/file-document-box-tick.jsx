import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq4y6eb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq4y6eb-r"/>`,
		"fallback": "mdi:file-document-box-tick",
	});
}

export default Component;
