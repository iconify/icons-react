import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar0c3_b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar0c3_b6e"/>`,
		"fallback": "streamline-sharp-color:check",
	});
}

export default Component;
