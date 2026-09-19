import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smegf5bhd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smegf5bhd"/>`,
		"fallback": "fa-solid:copy",
	});
}

export default Component;
