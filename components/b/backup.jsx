import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9j6bob4g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9j6bob4g"/>`,
		"fallback": "dashicons:backup",
	});
}

export default Component;
