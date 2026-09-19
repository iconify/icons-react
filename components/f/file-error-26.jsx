import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2atjnb_i.css';

const viewBox = {"width":20,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2atjnb_i"/>`,
		"fallback": "garden:file-error-26",
	});
}

export default Component;
