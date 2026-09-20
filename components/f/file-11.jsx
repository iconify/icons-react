import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgn3rcgnf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgn3rcgnf"/>`,
		"fallback": "subway:file-11",
	});
}

export default Component;
