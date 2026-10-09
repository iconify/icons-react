import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9w7clzrc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9w7clzrc"/>`,
		"fallback": "energy-icons:activity-20-bold",
	});
}

export default Component;
