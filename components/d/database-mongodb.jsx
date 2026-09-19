import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6q5h5ycr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6q5h5ycr"/>`,
		"fallback": "carbon:database-mongodb",
	});
}

export default Component;
