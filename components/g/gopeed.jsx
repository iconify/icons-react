import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3h177btt.css';
import '../../css/f/f2-iyob1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3h177btt"/><path class="f2-iyob1i"/>`,
		"fallback": "selfhst:gopeed",
	});
}

export default Component;
