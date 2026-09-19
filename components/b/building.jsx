import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn_dgl-by.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn_dgl-by"/>`,
		"fallback": "fa-solid:building",
	});
}

export default Component;
