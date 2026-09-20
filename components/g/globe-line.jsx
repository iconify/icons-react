import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0monobga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0monobga"/>`,
		"fallback": "ri:globe-line",
	});
}

export default Component;
