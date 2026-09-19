import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca8qu3aws.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca8qu3aws"/>`,
		"fallback": "garden:align-center-fill-16",
	});
}

export default Component;
