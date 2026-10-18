import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blvm6x9ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blvm6x9ra"/>`,
		"fallback": "vadivam:frame",
	});
}

export default Component;
