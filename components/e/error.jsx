import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdi7wib5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="qdi7wib5b"/>`,
		"fallback": "wordpress:error",
	});
}

export default Component;
