import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiz930s_m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiz930s_m"/>`,
		"fallback": "pinhead:briefcase-with-wifi",
	});
}

export default Component;
