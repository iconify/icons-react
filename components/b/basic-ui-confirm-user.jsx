import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv1tmnbqm.css';
import '../../css/t/tl0tvc7vo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv1tmnbqm"/><path clip-rule="evenodd" class="tl0tvc7vo"/>`,
		"fallback": "streamline-block:basic-ui-confirm-user",
	});
}

export default Component;
