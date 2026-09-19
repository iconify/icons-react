import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcrfoj4kj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcrfoj4kj"/>`,
		"fallback": "f7:ellipsis-circle-fill",
	});
}

export default Component;
