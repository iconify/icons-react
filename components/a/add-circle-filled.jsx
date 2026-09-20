import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6rs07cfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6rs07cfd"/>`,
		"fallback": "reicon:add-circle-filled",
	});
}

export default Component;
