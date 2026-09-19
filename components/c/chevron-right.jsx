import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw8qzuoks.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw8qzuoks"/>`,
		"fallback": "charm:chevron-right",
	});
}

export default Component;
