import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrwacn2yz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrwacn2yz"/>`,
		"fallback": "picon:babyroom",
	});
}

export default Component;
