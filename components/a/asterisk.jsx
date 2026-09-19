import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0b2bvsvt.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0b2bvsvt"/>`,
		"fallback": "foundation:asterisk",
	});
}

export default Component;
