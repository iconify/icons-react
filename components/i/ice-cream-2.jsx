import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfsfc7bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfsfc7bfp"/>`,
		"fallback": "tabler:ice-cream-2",
	});
}

export default Component;
