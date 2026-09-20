import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku34nyb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku34nyb_h"/>`,
		"fallback": "ri:arrow-drop-left-line",
	});
}

export default Component;
