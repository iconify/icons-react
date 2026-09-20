import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-0kz27_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="b-0kz27_l"/>`,
		"fallback": "wordpress:box",
	});
}

export default Component;
