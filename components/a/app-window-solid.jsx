import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv5ay4byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv5ay4byl"/>`,
		"fallback": "withicons:app-window-solid",
	});
}

export default Component;
