import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvqusacuk.css';
import '../../css/r/rx6x0jbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvqusacuk"/><path class="rx6x0jbia"/>`,
		"fallback": "pixel:filter-alt-circle",
	});
}

export default Component;
