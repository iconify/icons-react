import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km6do4blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km6do4blo"/>`,
		"fallback": "hugeicons:git-pull-request-create",
	});
}

export default Component;
