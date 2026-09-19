import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgs_9lbql.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgs_9lbql"/>`,
		"fallback": "f7:graph-circle",
	});
}

export default Component;
