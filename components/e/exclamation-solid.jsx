import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6gmxpbsf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6gmxpbsf"/>`,
		"fallback": "zondicons:exclamation-solid",
	});
}

export default Component;
