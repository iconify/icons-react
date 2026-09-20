import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkj37h9sb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkj37h9sb"/>`,
		"fallback": "raphael:anonymous",
	});
}

export default Component;
