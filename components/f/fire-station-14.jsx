import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcroc_0yk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcroc_0yk"/>`,
		"fallback": "osmic:fire-station-14",
	});
}

export default Component;
