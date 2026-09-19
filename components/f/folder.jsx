import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib9hyvbmq.css';

const viewBox = {"width":717,"height":632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib9hyvbmq"/>`,
		"fallback": "ls:folder",
	});
}

export default Component;
