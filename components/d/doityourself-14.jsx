import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u34x-cb8m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u34x-cb8m"/>`,
		"fallback": "osmic:doityourself-14",
	});
}

export default Component;
