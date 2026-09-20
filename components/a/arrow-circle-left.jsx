import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge2r--jhc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge2r--jhc"/>`,
		"fallback": "oi:arrow-circle-left",
	});
}

export default Component;
