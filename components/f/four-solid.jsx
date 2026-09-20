import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvdo4znfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvdo4znfk"/>`,
		"fallback": "mynaui:four-solid",
	});
}

export default Component;
