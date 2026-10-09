import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qox-itb7z.css';
import '../../css/i/ijj0fga_g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qox-itb7z"/><path class="ijj0fga_g"/>`,
		"fallback": "energy-icons:contact-20-bold",
	});
}

export default Component;
