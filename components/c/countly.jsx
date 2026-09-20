import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsxotrbem.css';
import '../../css/a/a-n77rjap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsxotrbem"/><path class="a-n77rjap"/>`,
		"fallback": "selfhst:countly",
	});
}

export default Component;
