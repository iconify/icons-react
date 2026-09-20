import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-uxht4zc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-uxht4zc"/>`,
		"fallback": "streamline:bug-virus-browser-remix",
	});
}

export default Component;
