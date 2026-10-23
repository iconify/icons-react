import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smt22waym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smt22waym"/>`,
		"fallback": "vadivam:graduation-cap",
	});
}

export default Component;
