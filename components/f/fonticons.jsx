import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9v8zkb_i.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9v8zkb_i"/>`,
		"fallback": "fa:fonticons",
	});
}

export default Component;
