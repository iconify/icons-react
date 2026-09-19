import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy63rh4wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy63rh4wi"/>`,
		"fallback": "iconoir:face-id",
	});
}

export default Component;
