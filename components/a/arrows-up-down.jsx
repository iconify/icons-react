import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj99t9bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj99t9bgd"/>`,
		"fallback": "nrk:arrows-up-down",
	});
}

export default Component;
