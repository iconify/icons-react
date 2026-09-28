import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4k1elb6d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4k1elb6d"/>`,
		"fallback": "pinhead:fork-beside-plate-beside-table-knife",
	});
}

export default Component;
