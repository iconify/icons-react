import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq2ycccbv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq2ycccbv"/>`,
		"fallback": "f7:arrow-up-right-diamond",
	});
}

export default Component;
