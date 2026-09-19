import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8je3wbfv.css';

const viewBox = {"width":2304,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8je3wbfv"/>`,
		"fallback": "fa:handshake-o",
	});
}

export default Component;
