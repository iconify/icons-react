import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu09wfb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu09wfb0p"/>`,
		"fallback": "hugeicons:folder-edit",
	});
}

export default Component;
