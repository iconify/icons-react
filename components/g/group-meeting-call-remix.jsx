import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzc1c8a6t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bzc1c8a6t"/>`,
		"fallback": "streamline:group-meeting-call-remix",
	});
}

export default Component;
