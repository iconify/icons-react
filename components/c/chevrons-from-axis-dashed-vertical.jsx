import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsf3-rhca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsf3-rhca"/>`,
		"fallback": "lucide:chevrons-from-axis-dashed-vertical",
	});
}

export default Component;
