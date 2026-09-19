import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awf1i5bbl.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awf1i5bbl"/>`,
		"fallback": "fa-solid:flushed",
	});
}

export default Component;
