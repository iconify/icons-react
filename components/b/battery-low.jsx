import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f21jypb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f21jypb-p"/>`,
		"fallback": "pixelarticons:battery-low",
	});
}

export default Component;
