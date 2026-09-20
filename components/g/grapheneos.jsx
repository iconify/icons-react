import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpt1axmyk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpt1axmyk"/>`,
		"fallback": "selfhst:grapheneos",
	});
}

export default Component;
