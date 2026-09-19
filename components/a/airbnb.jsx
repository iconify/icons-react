import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u85wa9_iu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u85wa9_iu"/>`,
		"fallback": "fa7-brands:airbnb",
	});
}

export default Component;
