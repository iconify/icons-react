import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg6xadbuq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg6xadbuq"/>`,
		"fallback": "streamline:graph-bar-increase",
	});
}

export default Component;
