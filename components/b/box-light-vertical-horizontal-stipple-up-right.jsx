import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3j-h9wtg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3j-h9wtg"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-up-right",
	});
}

export default Component;
