import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn-tllbxo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn-tllbxo"/>`,
		"fallback": "dashicons:admin-site-alt",
	});
}

export default Component;
