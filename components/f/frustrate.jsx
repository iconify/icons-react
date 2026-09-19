import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp_09j-wy.css';

const viewBox = {"width":717,"height":698};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp_09j-wy"/>`,
		"fallback": "ls:frustrate",
	});
}

export default Component;
