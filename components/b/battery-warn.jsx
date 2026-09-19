import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th7uwt0-x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th7uwt0-x"/>`,
		"fallback": "glyphs:battery-warn",
	});
}

export default Component;
