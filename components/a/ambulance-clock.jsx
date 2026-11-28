import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og56l8bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og56l8bhj"/>`,
		"fallback": "noviair-light:ambulance-clock",
	});
}

export default Component;
