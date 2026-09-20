import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etx7hfm9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etx7hfm9o"/>`,
		"fallback": "tabler:cell-signal-2",
	});
}

export default Component;
