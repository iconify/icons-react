import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at_to3c-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at_to3c-z"/>`,
		"fallback": "uit:border-out",
	});
}

export default Component;
