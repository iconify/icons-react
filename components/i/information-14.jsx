import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhwxi5bll.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhwxi5bll"/>`,
		"fallback": "osmic:information-14",
	});
}

export default Component;
