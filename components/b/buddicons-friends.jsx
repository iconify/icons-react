import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukbuipb6p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukbuipb6p"/>`,
		"fallback": "dashicons:buddicons-friends",
	});
}

export default Component;
