import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt4jk-xcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt4jk-xcn"/>`,
		"fallback": "lucide:chart-column-increasing",
	});
}

export default Component;
