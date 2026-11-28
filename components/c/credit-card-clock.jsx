import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c77mr0lli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c77mr0lli"/>`,
		"fallback": "noviair:credit-card-clock",
	});
}

export default Component;
