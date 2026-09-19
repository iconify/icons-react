import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6mmipbdo.css';

const viewBox = {"width":922,"height":622};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6mmipbdo"/>`,
		"fallback": "ls:bicycle",
	});
}

export default Component;
