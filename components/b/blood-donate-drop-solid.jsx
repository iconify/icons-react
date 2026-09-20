import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7n0tensn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s7n0tensn"/>`,
		"fallback": "streamline:blood-donate-drop-solid",
	});
}

export default Component;
