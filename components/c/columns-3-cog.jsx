import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voe_oxz9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voe_oxz9x"/>`,
		"fallback": "hugeicons:columns-3-cog",
	});
}

export default Component;
