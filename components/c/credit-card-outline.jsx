import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tta7sbo4k.css';
import '../../css/v/vwq36dbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tta7sbo4k"/><path class="vwq36dbtv"/>`,
		"fallback": "eva:credit-card-outline",
	});
}

export default Component;
