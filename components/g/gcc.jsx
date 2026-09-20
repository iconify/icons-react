import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ono6gbiiz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ono6gbiiz"/>`,
		"fallback": "thesvg:gcc",
	});
}

export default Component;
