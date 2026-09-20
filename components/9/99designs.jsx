import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtu2yutov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtu2yutov"/>`,
		"fallback": "thesvg:99designs",
	});
}

export default Component;
