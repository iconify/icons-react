import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6ucx0b-n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6ucx0b-n"/>`,
		"fallback": "fa7-solid:ellipsis-h",
	});
}

export default Component;
