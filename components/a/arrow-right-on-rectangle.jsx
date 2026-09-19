import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqpb84glt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqpb84glt"/>`,
		"fallback": "heroicons-outline:arrow-right-on-rectangle",
	});
}

export default Component;
