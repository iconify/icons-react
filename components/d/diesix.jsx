import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8udnvbsk.css';

const viewBox = {"width":960,"height":959};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8udnvbsk"/>`,
		"fallback": "whh:diesix",
	});
}

export default Component;
