import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr-71ib7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr-71ib7l"/>`,
		"fallback": "selfhst:astuto-light",
	});
}

export default Component;
