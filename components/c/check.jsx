import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc-nt5a3x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc-nt5a3x"/>`,
		"fallback": "picon:check",
	});
}

export default Component;
