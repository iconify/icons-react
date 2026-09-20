import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baaqp0b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baaqp0b9y"/>`,
		"fallback": "ri:error-warning-line",
	});
}

export default Component;
