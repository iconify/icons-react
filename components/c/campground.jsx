import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn6vonqsd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn6vonqsd"/>`,
		"fallback": "map:campground",
	});
}

export default Component;
