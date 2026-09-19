import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idcd7i-ig.css';
import '../../css/o/o3-2211gr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idcd7i-ig"/><path class="o3-2211gr"/>`,
		"fallback": "carbon:character-fraction",
	});
}

export default Component;
