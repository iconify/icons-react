import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_81m919d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_81m919d"/>`,
		"fallback": "streamline:inbox-lock-remix",
	});
}

export default Component;
