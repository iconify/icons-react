import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ral3ctvnu.css';
import '../../css/f/fd3h4yb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ral3ctvnu"/><path class="fd3h4yb_q"/>`,
		"fallback": "selfhst:gdms-light",
	});
}

export default Component;
