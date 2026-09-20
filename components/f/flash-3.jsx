import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd_r1krus.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd_r1krus"/>`,
		"fallback": "streamline:flash-3",
	});
}

export default Component;
