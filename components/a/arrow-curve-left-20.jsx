import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7-6yq52x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7-6yq52x"/>`,
		"fallback": "garden:arrow-curve-left-20",
	});
}

export default Component;
