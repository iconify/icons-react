import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t37i6zbkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t37i6zbkd"/>`,
		"fallback": "selfhst:actual-budget-light",
	});
}

export default Component;
