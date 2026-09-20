import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bog__x_pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bog__x_pt"/>`,
		"fallback": "tabler:baseline",
	});
}

export default Component;
