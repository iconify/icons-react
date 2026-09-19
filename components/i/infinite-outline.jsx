import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsvpctb2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsvpctb2l"/>`,
		"fallback": "ion:infinite-outline",
	});
}

export default Component;
