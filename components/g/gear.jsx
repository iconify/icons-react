import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjhq55beq.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjhq55beq"/>`,
		"fallback": "ls:gear",
	});
}

export default Component;
