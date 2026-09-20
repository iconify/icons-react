import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx_mgsb2j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx_mgsb2j"/>`,
		"fallback": "pinhead:archery-bow-and-archery-arrow",
	});
}

export default Component;
