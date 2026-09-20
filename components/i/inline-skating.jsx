import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvdmlcc9w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvdmlcc9w"/>`,
		"fallback": "map:inline-skating",
	});
}

export default Component;
