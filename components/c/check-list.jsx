import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajvpi2b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajvpi2b5h"/>`,
		"fallback": "pixel:check-list",
	});
}

export default Component;
