import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2zyaudgs.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2zyaudgs"/>`,
		"fallback": "fa-solid:box-open",
	});
}

export default Component;
