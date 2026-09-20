import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odmwx1c-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odmwx1c-t"/>`,
		"fallback": "simple-icons:aol",
	});
}

export default Component;
