import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr6b--b_p.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr6b--b_p"/>`,
		"fallback": "fa6-brands:creative-commons-share",
	});
}

export default Component;
