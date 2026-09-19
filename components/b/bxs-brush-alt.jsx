import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm-2y4n6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm-2y4n6b"/>`,
		"fallback": "bx:bxs-brush-alt",
	});
}

export default Component;
