import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve8q_8xia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve8q_8xia"/>`,
		"fallback": "iconaut:exclude-solid",
	});
}

export default Component;
