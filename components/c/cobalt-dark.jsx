import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjciqdb7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjciqdb7c"/>`,
		"fallback": "selfhst:cobalt-dark",
	});
}

export default Component;
