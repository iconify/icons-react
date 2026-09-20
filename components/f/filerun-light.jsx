import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz_xj2mif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz_xj2mif"/>`,
		"fallback": "selfhst:filerun-light",
	});
}

export default Component;
