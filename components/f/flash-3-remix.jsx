import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgnx0cq-a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgnx0cq-a"/>`,
		"fallback": "streamline:flash-3-remix",
	});
}

export default Component;
