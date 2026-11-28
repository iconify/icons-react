import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm6ycmxjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm6ycmxjv"/>`,
		"fallback": "iconaut:dumbbell-solid",
	});
}

export default Component;
