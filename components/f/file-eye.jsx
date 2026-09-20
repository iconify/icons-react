import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nis2pu8ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nis2pu8ag"/>`,
		"fallback": "mdi:file-eye",
	});
}

export default Component;
