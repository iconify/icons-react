import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afggl4bno.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afggl4bno"/>`,
		"fallback": "memory:format-align-top",
	});
}

export default Component;
