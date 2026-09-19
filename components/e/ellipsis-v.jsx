import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o16vbibxz.css';

const viewBox = {"width":192,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o16vbibxz"/>`,
		"fallback": "fa-solid:ellipsis-v",
	});
}

export default Component;
