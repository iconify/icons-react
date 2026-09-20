import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0esbbubm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0esbbubm"/>`,
		"fallback": "streamline-sharp:align-left-1",
	});
}

export default Component;
