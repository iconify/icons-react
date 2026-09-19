import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g775v9b1r.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g775v9b1r"/>`,
		"fallback": "fa:dot-circle-o",
	});
}

export default Component;
