import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsqwwjb6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsqwwjb6f"/>`,
		"fallback": "selfhst:gatus-dark",
	});
}

export default Component;
