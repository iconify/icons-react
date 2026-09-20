import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3jslumyd.css';
import '../../css/t/tzc9byxdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3jslumyd"/><path class="tzc9byxdu"/>`,
		"fallback": "uim:bag",
	});
}

export default Component;
