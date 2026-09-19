import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjtj27bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjtj27bzt"/>`,
		"fallback": "bxs:florist",
	});
}

export default Component;
