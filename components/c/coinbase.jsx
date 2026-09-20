import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wli5199pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wli5199pf"/>`,
		"fallback": "thesvg:coinbase",
	});
}

export default Component;
