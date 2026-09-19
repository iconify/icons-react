import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c__998bxp.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c__998bxp"/>`,
		"fallback": "fa-regular:grin-beam-sweat",
	});
}

export default Component;
