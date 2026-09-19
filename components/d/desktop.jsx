import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsxs_ubkk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsxs_ubkk"/>`,
		"fallback": "ion:desktop",
	});
}

export default Component;
