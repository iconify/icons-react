import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyi3rac9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyi3rac9f"/>`,
		"fallback": "ci:filter-off-outline",
	});
}

export default Component;
