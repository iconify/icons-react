import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyci3rbny.css';

const viewBox = {"width":109,"height":87};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyci3rbny"/>`,
		"fallback": "thesvg-color:gozle",
	});
}

export default Component;
