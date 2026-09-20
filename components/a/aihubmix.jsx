import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o08a26b7z.css';
import '../../css/j/j-jecncax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o08a26b7z"/><path clip-rule="evenodd" class="j-jecncax"/>`,
		"fallback": "thesvg-color:aihubmix",
	});
}

export default Component;
