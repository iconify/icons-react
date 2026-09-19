import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6xt707xs.css';
import '../../css/i/idlu6hbah.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6xt707xs"/><path class="idlu6hbah"/>`,
		"fallback": "carbon:face-cool",
	});
}

export default Component;
