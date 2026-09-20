import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqes0-jyr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqes0-jyr"/>`,
		"fallback": "streamline:equal-sign",
	});
}

export default Component;
