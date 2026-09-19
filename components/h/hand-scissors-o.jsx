import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3h5st27g.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3h5st27g"/>`,
		"fallback": "fa:hand-scissors-o",
	});
}

export default Component;
