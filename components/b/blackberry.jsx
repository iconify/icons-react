import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfolyzbji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfolyzbji"/>`,
		"fallback": "fa-brands:blackberry",
	});
}

export default Component;
