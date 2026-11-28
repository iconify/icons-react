import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0nks7b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0nks7b2s"/>`,
		"fallback": "iconaut:bus-solid",
	});
}

export default Component;
