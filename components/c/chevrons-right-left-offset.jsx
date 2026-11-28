import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac3gkccvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac3gkccvu"/>`,
		"fallback": "lucide:chevrons-right-left-offset",
	});
}

export default Component;
