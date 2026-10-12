import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czkug8blo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czkug8blo"/>`,
		"fallback": "garden:circle-strike-stroke-20",
	});
}

export default Component;
