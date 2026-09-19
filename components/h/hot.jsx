import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud5lazbpu.css';

const viewBox = {"width":819,"height":750};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud5lazbpu"/>`,
		"fallback": "ls:hot",
	});
}

export default Component;
