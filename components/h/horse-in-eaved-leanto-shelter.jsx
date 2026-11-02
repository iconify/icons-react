import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c351c7shn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c351c7shn"/>`,
		"fallback": "pinhead:horse-in-eaved-leanto-shelter",
	});
}

export default Component;
