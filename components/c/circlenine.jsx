import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fitr7gb4j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fitr7gb4j"/>`,
		"fallback": "whh:circlenine",
	});
}

export default Component;
