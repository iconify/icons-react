import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt5d2i_le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt5d2i_le"/>`,
		"fallback": "tabler:brand-flutter",
	});
}

export default Component;
