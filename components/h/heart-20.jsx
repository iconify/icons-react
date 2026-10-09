import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kob_3fbyh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kob_3fbyh"/>`,
		"fallback": "energy-icons:heart-20",
	});
}

export default Component;
