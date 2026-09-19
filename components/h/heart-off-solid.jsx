import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp_l5hn1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp_l5hn1w"/>`,
		"fallback": "basil:heart-off-solid",
	});
}

export default Component;
