import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r42xyg14h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r42xyg14h"/>`,
		"fallback": "streamline-cyber:binocular-1",
	});
}

export default Component;
