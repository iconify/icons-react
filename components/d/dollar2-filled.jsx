import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy0ajee7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jy0ajee7n"/>`,
		"fallback": "reicon:dollar2-filled",
	});
}

export default Component;
