import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olurz2b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olurz2b8l"/>`,
		"fallback": "tabler:adjustments-search",
	});
}

export default Component;
