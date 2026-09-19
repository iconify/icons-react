import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpupu3bqf.css';

const viewBox = {"width":1664,"height":1312};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpupu3bqf"/>`,
		"fallback": "fa:home",
	});
}

export default Component;
