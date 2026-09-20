import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyd_ku8wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyd_ku8wo"/>`,
		"fallback": "mdi:flag-variant-off",
	});
}

export default Component;
