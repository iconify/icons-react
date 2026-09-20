import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o233q6joo.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o233q6joo"/>`,
		"fallback": "jam:direction-f",
	});
}

export default Component;
