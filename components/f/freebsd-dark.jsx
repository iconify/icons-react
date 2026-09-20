import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggw6gxb-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggw6gxb-c"/>`,
		"fallback": "selfhst:freebsd-dark",
	});
}

export default Component;
