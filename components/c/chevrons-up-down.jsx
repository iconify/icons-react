import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmcnjks1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmcnjks1x"/>`,
		"fallback": "lucide:chevrons-up-down",
	});
}

export default Component;
