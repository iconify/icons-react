import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5-8qbbxc.css';

const viewBox = {"width":2176,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5-8qbbxc"/>`,
		"fallback": "fa:braille",
	});
}

export default Component;
