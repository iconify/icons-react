import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dajyi23za.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dajyi23za"/>`,
		"fallback": "charm:chevron-left",
	});
}

export default Component;
