import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epfl5fyqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epfl5fyqr"/>`,
		"fallback": "keyline-icons:arrow-in-up-dashed-panel-sharp-fill",
	});
}

export default Component;
