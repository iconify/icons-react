import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cesyobc_c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cesyobc_c"/>`,
		"fallback": "pinhead:chapel",
	});
}

export default Component;
