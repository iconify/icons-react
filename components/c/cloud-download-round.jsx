import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjfga9bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjfga9bzu"/>`,
		"fallback": "coolicons:cloud-download-round",
	});
}

export default Component;
