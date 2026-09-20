import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j64ljvpce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j64ljvpce"/>`,
		"fallback": "selfhst:flightradar24",
	});
}

export default Component;
