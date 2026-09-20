import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdv40tb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdv40tb3e"/>`,
		"fallback": "keyline-icons:arrow-up-left-dashed-panel-fill",
	});
}

export default Component;
