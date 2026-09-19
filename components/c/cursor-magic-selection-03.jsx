import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6ymjubyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6ymjubyz"/>`,
		"fallback": "hugeicons:cursor-magic-selection-03",
	});
}

export default Component;
