import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aez2ipb6w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aez2ipb6w"/>`,
		"fallback": "garden:direction-ltr-stroke-12",
	});
}

export default Component;
