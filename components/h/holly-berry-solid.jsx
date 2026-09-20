import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2j59xf0r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2j59xf0r"/>`,
		"fallback": "la:holly-berry-solid",
	});
}

export default Component;
