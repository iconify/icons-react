import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcc-cbb7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcc-cbb7t"/>`,
		"fallback": "bi:globe-central-south-asia-fill",
	});
}

export default Component;
