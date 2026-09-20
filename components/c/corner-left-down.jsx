import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4ha5ccvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4ha5ccvl"/>`,
		"fallback": "tabler:corner-left-down",
	});
}

export default Component;
