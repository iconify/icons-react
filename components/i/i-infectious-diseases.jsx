import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg9xpcbkq.css';
import '../../css/u/u-l7qbbnx.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg9xpcbkq"/><path class="u-l7qbbnx"/>`,
		"fallback": "medical-icon:i-infectious-diseases",
	});
}

export default Component;
