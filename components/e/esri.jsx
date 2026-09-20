import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ely61vbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ely61vbqx"/>`,
		"fallback": "thesvg-color:esri",
	});
}

export default Component;
