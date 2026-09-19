import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3v7ddcmr.css';

const viewBox = {"width":961,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3v7ddcmr"/>`,
		"fallback": "whh:digg",
	});
}

export default Component;
