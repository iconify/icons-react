import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8yt0_gac.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8yt0_gac"/>`,
		"fallback": "teenyicons:in-ear-headphones-outline",
	});
}

export default Component;
