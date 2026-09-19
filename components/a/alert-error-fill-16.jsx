import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmztkp8jx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmztkp8jx"/>`,
		"fallback": "garden:alert-error-fill-16",
	});
}

export default Component;
