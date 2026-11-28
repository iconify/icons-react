import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p49y3ab6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p49y3ab6s"/>`,
		"fallback": "iconaut:comma-solid",
	});
}

export default Component;
