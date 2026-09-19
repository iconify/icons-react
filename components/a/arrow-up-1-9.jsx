import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5mdo1bsb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5mdo1bsb"/>`,
		"fallback": "fa7-solid:arrow-up-1-9",
	});
}

export default Component;
