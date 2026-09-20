import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0nn-20rd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0nn-20rd"/>`,
		"fallback": "pinhead:arrow-up-to-rectangle-outline",
	});
}

export default Component;
