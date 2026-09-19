import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iss18acza.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iss18acza"/>`,
		"fallback": "fa6-solid:florin-sign",
	});
}

export default Component;
