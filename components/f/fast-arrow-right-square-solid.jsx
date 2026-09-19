import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwxmhvb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wwxmhvb1c"/>`,
		"fallback": "iconoir:fast-arrow-right-square-solid",
	});
}

export default Component;
