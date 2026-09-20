import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zghiu7b_h.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zghiu7b_h"/>`,
		"fallback": "memory:box-outer-light-round-down-right",
	});
}

export default Component;
