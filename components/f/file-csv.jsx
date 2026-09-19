import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riux-3art.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riux-3art"/>`,
		"fallback": "fa-solid:file-csv",
	});
}

export default Component;
