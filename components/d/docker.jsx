import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltp815bff.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltp815bff"/>`,
		"fallback": "fa-brands:docker",
	});
}

export default Component;
