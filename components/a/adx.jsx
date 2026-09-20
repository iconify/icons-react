import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2zyu91sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2zyu91sq"/>`,
		"fallback": "token:adx",
	});
}

export default Component;
