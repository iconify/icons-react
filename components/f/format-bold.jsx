import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4mil5bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="l4mil5bye"/>`,
		"fallback": "wordpress:format-bold",
	});
}

export default Component;
