import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2c8clb_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2c8clb_p"/>`,
		"fallback": "selfhst:inkscape-light",
	});
}

export default Component;
