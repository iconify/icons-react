import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk7531b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk7531b5h"/>`,
		"fallback": "noviair:clock-3",
	});
}

export default Component;
