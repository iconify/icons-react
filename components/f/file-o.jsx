import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry_x50bjw.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry_x50bjw"/>`,
		"fallback": "fa:file-o",
	});
}

export default Component;
