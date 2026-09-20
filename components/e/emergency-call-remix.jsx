import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcuu3-d9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rcuu3-d9d"/>`,
		"fallback": "streamline:emergency-call-remix",
	});
}

export default Component;
