import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvg7sdoku.css';

const viewBox = {"width":256,"height":231};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvg7sdoku"/>`,
		"fallback": "thesvg-color:expo",
	});
}

export default Component;
