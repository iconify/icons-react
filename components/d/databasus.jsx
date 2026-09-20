import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zittx0o1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zittx0o1i"/>`,
		"fallback": "selfhst:databasus",
	});
}

export default Component;
