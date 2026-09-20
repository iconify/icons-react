import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se-1--b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se-1--b0o"/>`,
		"fallback": "reicon:battery-empty-filled",
	});
}

export default Component;
