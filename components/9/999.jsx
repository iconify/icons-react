import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa9aseb2e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa9aseb2e"/>`,
		"fallback": "pinhead:999",
	});
}

export default Component;
