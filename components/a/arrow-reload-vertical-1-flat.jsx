import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djmv0c3tz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="djmv0c3tz"/>`,
		"fallback": "streamline-color:arrow-reload-vertical-1-flat",
	});
}

export default Component;
