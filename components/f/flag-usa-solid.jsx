import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp_djx_7a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp_djx_7a"/>`,
		"fallback": "la:flag-usa-solid",
	});
}

export default Component;
