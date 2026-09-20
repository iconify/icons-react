import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raf118bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raf118bor"/>`,
		"fallback": "streamline-sharp:dashboard-1",
	});
}

export default Component;
