import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppk4v-xzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppk4v-xzj"/>`,
		"fallback": "selfhst:eziwiki-dark",
	});
}

export default Component;
