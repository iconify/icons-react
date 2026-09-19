import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc96p9j4t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc96p9j4t"/>`,
		"fallback": "devicon-plain:azuredatafactory",
	});
}

export default Component;
