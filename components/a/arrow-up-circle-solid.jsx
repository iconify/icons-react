import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy251cc0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dy251cc0k"/>`,
		"fallback": "iconoir:arrow-up-circle-solid",
	});
}

export default Component;
