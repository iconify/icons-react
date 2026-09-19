import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcznrtbfl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcznrtbfl"/>`,
		"fallback": "bi:4-circle-fill",
	});
}

export default Component;
