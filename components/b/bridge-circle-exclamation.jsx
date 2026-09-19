import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogx6jxblx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogx6jxblx"/>`,
		"fallback": "fa7-solid:bridge-circle-exclamation",
	});
}

export default Component;
