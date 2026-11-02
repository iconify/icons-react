import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rak7p_bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rak7p_bwv"/>`,
		"fallback": "mingcute:grass-line",
	});
}

export default Component;
