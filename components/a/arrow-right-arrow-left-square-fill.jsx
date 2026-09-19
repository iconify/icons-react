import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jof-b7b9i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jof-b7b9i"/>`,
		"fallback": "f7:arrow-right-arrow-left-square-fill",
	});
}

export default Component;
