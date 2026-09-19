import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k77di3nnm.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k77di3nnm"/>`,
		"fallback": "fa-regular:grin-tongue-wink",
	});
}

export default Component;
