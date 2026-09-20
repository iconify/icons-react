import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w22q1qmkw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w22q1qmkw"/>`,
		"fallback": "la:dice-four-solid",
	});
}

export default Component;
