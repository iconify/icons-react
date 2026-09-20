import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycw6-llxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycw6-llxp"/>`,
		"fallback": "thesvg-color:ferretdb",
	});
}

export default Component;
