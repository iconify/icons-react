import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3t4odkol.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3t4odkol"/>`,
		"fallback": "vs:g-square",
	});
}

export default Component;
