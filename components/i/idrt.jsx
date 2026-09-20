import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gufv3ebnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gufv3ebnj"/>`,
		"fallback": "token:idrt",
	});
}

export default Component;
