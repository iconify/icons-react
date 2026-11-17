import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooo659baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooo659baw"/>`,
		"fallback": "lucide:chevrons-from-axis-dashed-horizontal",
	});
}

export default Component;
