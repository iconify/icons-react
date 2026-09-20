import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oocw2onbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oocw2onbx"/>`,
		"fallback": "keyline-icons:chart-line-decreasing",
	});
}

export default Component;
