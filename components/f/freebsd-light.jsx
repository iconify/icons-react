import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9gwurbli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9gwurbli"/>`,
		"fallback": "selfhst:freebsd-light",
	});
}

export default Component;
