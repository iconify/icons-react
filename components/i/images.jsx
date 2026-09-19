import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4-w4rbmj.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4-w4rbmj"/>`,
		"fallback": "fa-solid:images",
	});
}

export default Component;
