import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckolh8b5r.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckolh8b5r"/>`,
		"fallback": "wi:horizon-alt",
	});
}

export default Component;
