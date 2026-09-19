import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clchc7ilh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clchc7ilh"/>`,
		"fallback": "icons8:dining-room",
	});
}

export default Component;
