import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkrk-nb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkrk-nb2f"/>`,
		"fallback": "noviair-light:christmas-tree-star",
	});
}

export default Component;
