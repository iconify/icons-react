import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv2x-ef6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv2x-ef6c"/>`,
		"fallback": "mynaui:eye-slash-solid",
	});
}

export default Component;
