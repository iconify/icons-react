import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syuj88pod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syuj88pod"/>`,
		"fallback": "vadivam:cable-car",
	});
}

export default Component;
