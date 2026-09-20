import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucu1ribst.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ucu1ribst"/>`,
		"fallback": "streamline:fireworks-rocket-solid",
	});
}

export default Component;
