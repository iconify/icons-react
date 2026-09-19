import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7_t3jbcz.css';
import '../../css/u/u2b-m9bbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7_t3jbcz"/><path class="u2b-m9bbv"/>`,
		"fallback": "ion:chatbubbles",
	});
}

export default Component;
