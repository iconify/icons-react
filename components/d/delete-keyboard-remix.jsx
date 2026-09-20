import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp8t6f6gx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bp8t6f6gx"/>`,
		"fallback": "streamline:delete-keyboard-remix",
	});
}

export default Component;
