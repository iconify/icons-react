import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g76-_3dup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g76-_3dup"/>`,
		"fallback": "thesvg-color:freebsd",
	});
}

export default Component;
