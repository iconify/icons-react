import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx5vjcz8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx5vjcz8w"/>`,
		"fallback": "boxicons:cloud-fog",
	});
}

export default Component;
