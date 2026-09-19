import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjb-r5bnk.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjb-r5bnk"/>`,
		"fallback": "topcoat:arrow-down",
	});
}

export default Component;
