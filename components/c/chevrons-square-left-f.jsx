import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjh-wu7-u.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjh-wu7-u"/>`,
		"fallback": "jam:chevrons-square-left-f",
	});
}

export default Component;
