import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv1tmnbqm.css';
import '../../css/p/p_f0lhbyw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv1tmnbqm"/><path clip-rule="evenodd" class="p_f0lhbyw"/>`,
		"fallback": "streamline-block:basic-ui-add-user",
	});
}

export default Component;
