import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx5kbcrzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx5kbcrzo"/>`,
		"fallback": "mynaui:archive-solid",
	});
}

export default Component;
