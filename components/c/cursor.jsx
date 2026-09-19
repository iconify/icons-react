import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/damdljbyu.css';

const viewBox = {"width":340,"height":651};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="damdljbyu"/>`,
		"fallback": "ls:cursor",
	});
}

export default Component;
