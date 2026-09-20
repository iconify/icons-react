import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt6-z2b6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt6-z2b6w"/>`,
		"fallback": "selfhst:beets-light",
	});
}

export default Component;
