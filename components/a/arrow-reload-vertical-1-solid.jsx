import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru8kj1rep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ru8kj1rep"/>`,
		"fallback": "streamline:arrow-reload-vertical-1-solid",
	});
}

export default Component;
