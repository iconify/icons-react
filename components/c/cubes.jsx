import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh-v3mdgw.css';

const viewBox = {"width":2176,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh-v3mdgw"/>`,
		"fallback": "fa:cubes",
	});
}

export default Component;
