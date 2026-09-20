import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2u_3tbje.css';
import '../../css/z/znxwd8tvz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2u_3tbje"/><path class="znxwd8tvz"/>`,
		"fallback": "medical-icon:imaging-root-category",
	});
}

export default Component;
