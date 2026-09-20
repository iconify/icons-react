import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tev1h3bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tev1h3bwh"/>`,
		"fallback": "mdi:file-table-box-multiple-outline",
	});
}

export default Component;
