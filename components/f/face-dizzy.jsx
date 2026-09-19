import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww4fyqbuj.css';
import '../../css/w/wy7ugsoed.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww4fyqbuj"/><path class="wy7ugsoed"/>`,
		"fallback": "carbon:face-dizzy",
	});
}

export default Component;
