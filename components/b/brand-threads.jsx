import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo5-0ek9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo5-0ek9r"/>`,
		"fallback": "tabler:brand-threads",
	});
}

export default Component;
