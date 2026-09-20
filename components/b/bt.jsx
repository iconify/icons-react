import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqdrd48yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqdrd48yy"/>`,
		"fallback": "simple-icons:bt",
	});
}

export default Component;
