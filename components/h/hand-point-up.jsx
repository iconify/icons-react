import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-fh4lbko.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-fh4lbko"/>`,
		"fallback": "fa6-regular:hand-point-up",
	});
}

export default Component;
