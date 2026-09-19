import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3cou9bya.css';

const viewBox = {"width":402,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3cou9bya"/>`,
		"fallback": "file-icons:bluespec",
	});
}

export default Component;
