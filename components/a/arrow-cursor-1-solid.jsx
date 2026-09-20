import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umv_60bct.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="umv_60bct"/>`,
		"fallback": "streamline:arrow-cursor-1-solid",
	});
}

export default Component;
