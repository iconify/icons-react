import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z518hdbua.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z518hdbua"/>`,
		"fallback": "la:clock-solid",
	});
}

export default Component;
