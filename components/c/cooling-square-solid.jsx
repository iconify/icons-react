import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqo9-i3ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pqo9-i3ct"/>`,
		"fallback": "iconoir:cooling-square-solid",
	});
}

export default Component;
