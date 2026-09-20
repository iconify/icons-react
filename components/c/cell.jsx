import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isf2-mbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isf2-mbtc"/>`,
		"fallback": "tabler:cell",
	});
}

export default Component;
