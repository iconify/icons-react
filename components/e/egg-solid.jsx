import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsfwnr_ph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsfwnr_ph"/>`,
		"fallback": "la:egg-solid",
	});
}

export default Component;
