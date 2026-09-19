import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9028ebbp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9028ebbp"/>`,
		"fallback": "f7:goforward-plus",
	});
}

export default Component;
