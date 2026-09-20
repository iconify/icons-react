import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl2t54zdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl2t54zdd"/>`,
		"fallback": "mynaui:bookmark",
	});
}

export default Component;
