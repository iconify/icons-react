import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb3y6ibjk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb3y6ibjk"/>`,
		"fallback": "pinhead:candlepin",
	});
}

export default Component;
