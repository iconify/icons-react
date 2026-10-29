import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta07lbb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta07lbb5y"/>`,
		"fallback": "withicons:contact-solid",
	});
}

export default Component;
