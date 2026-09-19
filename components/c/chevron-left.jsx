import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1dfrij3o.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1dfrij3o"/>`,
		"fallback": "ei:chevron-left",
	});
}

export default Component;
