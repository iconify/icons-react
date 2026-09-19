import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r57eupb_b.css';

const viewBox = {"width":696,"height":692};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r57eupb_b"/>`,
		"fallback": "ls:copy",
	});
}

export default Component;
