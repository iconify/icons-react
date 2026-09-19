import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yanv2cchx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yanv2cchx"/>`,
		"fallback": "heroicons-outline:chevron-double-up",
	});
}

export default Component;
