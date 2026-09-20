import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkf_nqv3a.css';

const viewBox = {"width":65,"height":65,"left":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkf_nqv3a"/>`,
		"fallback": "thesvg-color:chunk-dark",
	});
}

export default Component;
