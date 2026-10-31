import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_2e5hb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_2e5hb8w"/>`,
		"fallback": "coolicons:chevron-up-small-duotone-round",
	});
}

export default Component;
