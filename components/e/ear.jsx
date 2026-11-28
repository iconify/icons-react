import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7nz21b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7nz21b2o"/>`,
		"fallback": "noviair:ear",
	});
}

export default Component;
