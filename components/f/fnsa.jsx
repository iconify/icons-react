import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe0w18bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe0w18bil"/>`,
		"fallback": "token:fnsa",
	});
}

export default Component;
