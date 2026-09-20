import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n814-dbmh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n814-dbmh"/>`,
		"fallback": "streamline:chair",
	});
}

export default Component;
