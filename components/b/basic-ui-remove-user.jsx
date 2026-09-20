import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv1tmnbqm.css';
import '../../css/h/h_146gbqj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv1tmnbqm"/><path clip-rule="evenodd" class="h_146gbqj"/>`,
		"fallback": "streamline-block:basic-ui-remove-user",
	});
}

export default Component;
