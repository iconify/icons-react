import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6d-ncbcf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6d-ncbcf"/>`,
		"fallback": "picon:down",
	});
}

export default Component;
