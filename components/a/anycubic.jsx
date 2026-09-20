import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ric0ypn-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ric0ypn-p"/>`,
		"fallback": "thesvg:anycubic",
	});
}

export default Component;
