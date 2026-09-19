import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh__jg8hy.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh__jg8hy"/>`,
		"fallback": "fa6-solid:bell",
	});
}

export default Component;
