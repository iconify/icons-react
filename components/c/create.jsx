import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz7b8nbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="xz7b8nbwo"/>`,
		"fallback": "wordpress:create",
	});
}

export default Component;
