import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsttf0l7m.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsttf0l7m"/>`,
		"fallback": "fa6-solid:chess-knight",
	});
}

export default Component;
