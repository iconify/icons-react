import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6459zb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="r6459zb0v"/>`,
		"fallback": "wordpress:desktop",
	});
}

export default Component;
