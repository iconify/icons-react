import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe_lsrbrv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe_lsrbrv"/>`,
		"fallback": "cib:gnu-social",
	});
}

export default Component;
