import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9xtaw1ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9xtaw1ie"/>`,
		"fallback": "pixel:ellipses-horizontal-solid",
	});
}

export default Component;
