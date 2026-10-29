import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlb4bxb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlb4bxb9x"/>`,
		"fallback": "withicons:inbox-solid",
	});
}

export default Component;
