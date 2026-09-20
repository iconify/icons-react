import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unc3p6dyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unc3p6dyu"/>`,
		"fallback": "ix:inquiry-mail",
	});
}

export default Component;
