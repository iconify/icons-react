import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4a9a20_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4a9a20_d"/>`,
		"fallback": "selfhst:diskover-light",
	});
}

export default Component;
