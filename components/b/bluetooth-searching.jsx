import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyr3ihb1v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyr3ihb1v"/>`,
		"fallback": "streamline-flex-color:bluetooth-searching",
	});
}

export default Component;
