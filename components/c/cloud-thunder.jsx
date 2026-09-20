import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzprvpzgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzprvpzgw"/>`,
		"fallback": "ix:cloud-thunder",
	});
}

export default Component;
