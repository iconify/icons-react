import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozmf5ipva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozmf5ipva"/>`,
		"fallback": "ri:git-pull-request-fill",
	});
}

export default Component;
