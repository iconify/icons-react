import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jge4mgh9x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jge4mgh9x"/>`,
		"fallback": "roentgen:film",
	});
}

export default Component;
