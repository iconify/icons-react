import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjjo1ibry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjjo1ibry"/>`,
		"fallback": "iconaut:input-cursor-solid",
	});
}

export default Component;
