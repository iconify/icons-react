import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lddvu1b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lddvu1b9t"/>`,
		"fallback": "prime:chevron-left",
	});
}

export default Component;
