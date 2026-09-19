import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0vf9m35x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0vf9m35x"/>`,
		"fallback": "carbon:color-switch",
	});
}

export default Component;
