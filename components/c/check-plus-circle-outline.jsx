import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxai6ezyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxai6ezyz"/>`,
		"fallback": "flowbite:check-plus-circle-outline",
	});
}

export default Component;
