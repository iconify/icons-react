import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t69e_jbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t69e_jbfe"/>`,
		"fallback": "iconoir:edit-pencil",
	});
}

export default Component;
