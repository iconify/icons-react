import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2y96rwvy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2y96rwvy"/>`,
		"fallback": "carbon:area",
	});
}

export default Component;
