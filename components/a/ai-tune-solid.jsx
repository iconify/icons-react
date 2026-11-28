import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezyrsyb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezyrsyb9c"/>`,
		"fallback": "iconaut:ai-tune-solid",
	});
}

export default Component;
