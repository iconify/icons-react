import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt1rccc2w.css';

const viewBox = {"width":487,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt1rccc2w"/>`,
		"fallback": "file-icons:grapher",
	});
}

export default Component;
