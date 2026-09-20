import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkfm0bb7q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkfm0bb7q"/>`,
		"fallback": "selfhst:affine-light",
	});
}

export default Component;
