import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr5yr2buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr5yr2buj"/>`,
		"fallback": "lucide:chevrons-to-axis-dashed-vertical",
	});
}

export default Component;
