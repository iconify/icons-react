import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hemdfdcsx.css';
import '../../css/d/dvogbhbaa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hemdfdcsx"/><path class="dvogbhbaa"/>`,
		"fallback": "selfhst:forms-md",
	});
}

export default Component;
