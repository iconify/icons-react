import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg3j76tts.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg3j76tts"/>`,
		"fallback": "fa7-solid:bicycle",
	});
}

export default Component;
