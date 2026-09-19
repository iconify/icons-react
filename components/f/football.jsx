import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8_3nubjg.css';
import '../../css/s/skvu_5_5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8_3nubjg"/><path class="skvu_5_5i"/>`,
		"fallback": "circum:football",
	});
}

export default Component;
