import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1c-26sug.css';

const viewBox = {"width":65,"height":65,"left":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1c-26sug"/>`,
		"fallback": "thesvg:chunk",
	});
}

export default Component;
