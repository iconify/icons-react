import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycoy9kbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycoy9kbgp"/>`,
		"fallback": "vadivam:database-minus",
	});
}

export default Component;
