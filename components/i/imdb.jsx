import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aswk-v_ye.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aswk-v_ye"/>`,
		"fallback": "fa7-brands:imdb",
	});
}

export default Component;
