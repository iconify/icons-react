import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je9v0ja6a.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je9v0ja6a"/>`,
		"fallback": "fa:facebook-square",
	});
}

export default Component;
