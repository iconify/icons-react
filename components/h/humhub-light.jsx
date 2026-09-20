import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj8w6lbuw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj8w6lbuw"/>`,
		"fallback": "selfhst:humhub-light",
	});
}

export default Component;
