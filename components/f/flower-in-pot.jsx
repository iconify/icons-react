import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrtz2jb3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrtz2jb3y"/>`,
		"fallback": "roentgen:flower-in-pot",
	});
}

export default Component;
