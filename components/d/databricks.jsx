import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy2clbvbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy2clbvbb"/>`,
		"fallback": "thesvg-color:databricks",
	});
}

export default Component;
