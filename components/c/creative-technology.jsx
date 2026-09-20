import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4xdi5bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4xdi5bqh"/>`,
		"fallback": "thesvg-color:creative-technology",
	});
}

export default Component;
