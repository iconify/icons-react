import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt3prvmif.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt3prvmif"/>`,
		"fallback": "ooui:flag-rtl",
	});
}

export default Component;
