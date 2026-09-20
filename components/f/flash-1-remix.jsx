import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aak4xjbpx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aak4xjbpx"/>`,
		"fallback": "streamline:flash-1-remix",
	});
}

export default Component;
