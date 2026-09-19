import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhj9nvh1y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhj9nvh1y"/>`,
		"fallback": "f7:bed-double",
	});
}

export default Component;
