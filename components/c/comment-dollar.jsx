import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1kzdpb4n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1kzdpb4n"/>`,
		"fallback": "la:comment-dollar",
	});
}

export default Component;
