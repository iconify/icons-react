import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky134rbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky134rbgx"/>`,
		"fallback": "heroicons-outline:folder-minus",
	});
}

export default Component;
