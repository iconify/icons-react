import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fur479xqc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fur479xqc"/>`,
		"fallback": "bi:house-door-fill",
	});
}

export default Component;
