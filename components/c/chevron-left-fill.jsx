import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1dymm05g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k1dymm05g"/>`,
		"fallback": "si:chevron-left-fill",
	});
}

export default Component;
