import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx5ddjbmv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx5ddjbmv"/>`,
		"fallback": "dinkie-icons:globe-meridians-small",
	});
}

export default Component;
