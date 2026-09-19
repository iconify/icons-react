import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hspng2bgf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hspng2bgf"/>`,
		"fallback": "dinkie-icons:file-woff2",
	});
}

export default Component;
