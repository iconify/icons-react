import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhaiv-07w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhaiv-07w"/>`,
		"fallback": "tabler:bell-key",
	});
}

export default Component;
