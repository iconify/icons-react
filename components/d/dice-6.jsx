import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2rng6b4e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y2rng6b4e"/>`,
		"fallback": "gravity-ui:dice-6",
	});
}

export default Component;
