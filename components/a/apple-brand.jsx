import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb4yoebdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb4yoebdt"/>`,
		"fallback": "lineicons:apple-brand",
	});
}

export default Component;
