import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax9d5gbpa.css';
import '../../css/w/w6rxgvl3c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax9d5gbpa"/><path class="w6rxgvl3c"/>`,
		"fallback": "energy-icons:face-shield-20",
	});
}

export default Component;
