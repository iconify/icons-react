import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6r3qlnuf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6r3qlnuf"/>`,
		"fallback": "pinhead:car-under-wrench",
	});
}

export default Component;
