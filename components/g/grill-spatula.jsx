import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh203n_7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh203n_7r"/>`,
		"fallback": "tabler:grill-spatula",
	});
}

export default Component;
