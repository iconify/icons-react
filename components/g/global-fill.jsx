import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v33-9ibjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v33-9ibjx"/>`,
		"fallback": "ri:global-fill",
	});
}

export default Component;
