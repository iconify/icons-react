import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3gvyi5tc.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3gvyi5tc"/>`,
		"fallback": "fa-brands:gratipay",
	});
}

export default Component;
