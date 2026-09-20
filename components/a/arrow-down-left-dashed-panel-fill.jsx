import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek5tstf8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek5tstf8a"/>`,
		"fallback": "keyline-icons:arrow-down-left-dashed-panel-fill",
	});
}

export default Component;
