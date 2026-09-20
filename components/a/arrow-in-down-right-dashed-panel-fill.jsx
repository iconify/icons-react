import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o07u8dbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o07u8dbiq"/>`,
		"fallback": "keyline-icons:arrow-in-down-right-dashed-panel-fill",
	});
}

export default Component;
