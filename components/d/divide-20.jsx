import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic2g5r53d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic2g5r53d"/>`,
		"fallback": "energy-icons:divide-20",
	});
}

export default Component;
