import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9d-6sbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="g9d-6sbrt"/>`,
		"fallback": "wordpress:brush",
	});
}

export default Component;
