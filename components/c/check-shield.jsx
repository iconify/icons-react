import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbp_6dbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbp_6dbny"/>`,
		"fallback": "bxs:check-shield",
	});
}

export default Component;
