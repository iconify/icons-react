import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb4c10b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="jb4c10b2i"/>`,
		"fallback": "wordpress:flip-vertical",
	});
}

export default Component;
