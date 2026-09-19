import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbmwvhb1l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbmwvhb1l"/>`,
		"fallback": "bi:currency-euro",
	});
}

export default Component;
