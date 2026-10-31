import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfoy2u9zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfoy2u9zd"/>`,
		"fallback": "coolicons:diamond-check-fill-round",
	});
}

export default Component;
