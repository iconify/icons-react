import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad00tcuay.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad00tcuay"/>`,
		"fallback": "lsicon:home-outline",
	});
}

export default Component;
