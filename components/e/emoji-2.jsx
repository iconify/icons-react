import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh6krl1fc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh6krl1fc"/>`,
		"fallback": "fluent-mdl2:emoji-2",
	});
}

export default Component;
